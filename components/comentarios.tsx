import React, { useState } from 'react';
import { Modal, FlatList, View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Comentario = {
    id_post: number;
    id_comentario: number;
    usuario: string;
    img_perfil: string;
    comentario: string;
    likes: number;
    fecha: string;
    hora: string;
    respuestas: Comentario[];
};

interface ComentariosModalProps {
    modalVisible: boolean;
    toggleModal: () => void;
    datos: {
        id: number;
        nombre: string;
        profesion: string;
        img_perfil: string;
        img_post: string;
        descripcion: string;
        likes: number;
        cant_comentarios: number;
        comentarios: Comentario[];
    };
}

const ComentariosModal: React.FC<ComentariosModalProps> = ({ modalVisible, toggleModal, datos }) => {
    const [comentario, setComentario] = useState('');
    const [comentarioSeleccionado, setComentarioSeleccionado] = useState<number | null>(null);
    const [respuestasVisibles, setRespuestasVisibles] = useState<Set<number>>(new Set());
    const [likedComments, setLikedComments] = useState<number[]>([]);

    const handleResponder = (idComentario: number) => {
        setComentarioSeleccionado(idComentario);
    };

    const toggleRespuestasVisibles = (idComentario: number) => {
        const newSet = new Set(respuestasVisibles);
        if (newSet.has(idComentario)) {
            newSet.delete(idComentario);
        } else {
            newSet.add(idComentario);
        }
        setRespuestasVisibles(newSet);
    };

    const toggleLike = (idComentario: number) => {
        setLikedComments(prev => 
            prev.includes(idComentario) 
                ? prev.filter(id => id !== idComentario)
                : [...prev, idComentario]
        );
    };

    const renderComentario = ({ item }: { item: Comentario }) => (
        <View style={styles.comentario}>
            <Image source={{ uri: item.img_perfil }} style={styles.foto_perfil} />
            <View style={styles.contenido_comentario}>
                <Text style={styles.nombre_usuario}>{item.usuario}</Text>
                <Text style={styles.texto_comentario}>{item.comentario}</Text>
                <View style={styles.acciones_comentario}>
                    <TouchableOpacity 
                        style={styles.accion} 
                        onPress={() => toggleLike(item.id_comentario)}
                    >
                        <Ionicons 
                            name={likedComments.includes(item.id_comentario) ? "heart" : "heart-outline"} 
                            size={16} 
                            color={likedComments.includes(item.id_comentario) ? "#8BC34A" : "#424242"} 
                        />
                        <Text style={styles.contador}>{item.likes}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accion}>
                        <Ionicons name="chatbubble-outline" size={16} color="#424242" />
                        <Text style={styles.contador}>{item.respuestas.length}</Text>
                    </TouchableOpacity>
                    <Text style={styles.fecha}>{item.fecha} {item.hora}</Text>
                </View>
                <View style={styles.botones_respuesta}>
                    <TouchableOpacity onPress={() => handleResponder(item.id_comentario)}>
                        <Text style={styles.boton_respuesta}>Responder</Text>
                    </TouchableOpacity>
                    {item.respuestas.length > 0 && (
                        <TouchableOpacity onPress={() => toggleRespuestasVisibles(item.id_comentario)}>
                            <Text style={styles.boton_respuesta}>
                                {respuestasVisibles.has(item.id_comentario) ? 'Ocultar respuestas' : 'Ver respuestas'}
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
                {respuestasVisibles.has(item.id_comentario) && item.respuestas.length > 0 && (
                    <View style={styles.respuestasContainer}>
                        {item.respuestas.map((resp, index) => (
                            <View key={index} style={styles.respuesta}>
                                <Image source={{ uri: resp.img_perfil }} style={styles.foto_perfil_pequena} />
                                <View style={styles.contenido_comentario}>
                                    <Text style={styles.nombre_usuario}>{resp.usuario}</Text>
                                    <Text style={styles.texto_comentario}>{resp.comentario}</Text>
                                    <View style={styles.acciones_comentario}>
                                        <TouchableOpacity 
                                            style={styles.accion} 
                                            onPress={() => toggleLike(resp.id_comentario)}
                                        >
                                            <Ionicons 
                                                name={likedComments.includes(resp.id_comentario) ? "heart" : "heart-outline"} 
                                                size={16} 
                                                color={likedComments.includes(resp.id_comentario) ? "#8BC34A" : "#424242"} 
                                            />
                                            <Text style={styles.contador}>{resp.likes}</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.fecha}>{resp.fecha} {resp.hora}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                )}
            </View>
        </View>
    );

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={toggleModal}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Comentarios</Text>
                        <TouchableOpacity onPress={toggleModal}>
                            <Ionicons name="close" size={24} color="#333" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.comentariosContainer}>
                        <FlatList
                            data={datos.comentarios}
                            keyExtractor={(item) => item.id_comentario.toString()}
                            renderItem={renderComentario}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.comentariosList}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Escribe un comentario..."
                            value={comentario}
                            onChangeText={setComentario}
                        />
                        <TouchableOpacity style={styles.sendButton}>
                            <Ionicons name="send" size={20} color="#8BC34A" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '80%',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    comentariosContainer: {
        flex: 1,
    },
    comentariosList: {
        paddingBottom: 20,
    },
    comentario: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    foto_perfil: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    foto_perfil_pequena: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
    },
    contenido_comentario: {
        flex: 1,
    },
    nombre_usuario: {
        fontWeight: 'bold',
    },
    texto_comentario: {
        marginVertical: 5,
        fontSize: 14,
        color: '#333',
    },
    acciones_comentario: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    accion: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    contador: {
        marginLeft: 5,
        fontSize: 12,
        color: '#666',
    },
    fecha: {
        fontSize: 12,
        color: '#777',
    },
    botones_respuesta: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 5,
    },
    boton_respuesta: {
        color: '#8BC34A',
        fontSize: 12,
    },
    respuestasContainer: {
        marginTop: 10,
        marginLeft: 10,
    },
    respuesta: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 10,
    },
    input: {
        flex: 1,
        height: 40,
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        paddingHorizontal: 15,
        marginRight: 10,
    },
    sendButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ComentariosModal;