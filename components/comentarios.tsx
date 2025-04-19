import React, { useState } from 'react';
import { Modal, FlatList, View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface ComentariosModalProps {
    modalVisible: boolean;
    toggleModal: () => void;
    datos: {
        comentarios: {
            id_comentario: number;
            usuario: string;
            img_perfil: string;
            comentario: string;
            likes: number;
            fecha: string;
            hora: string;
            respuestas: {
                id_comentario: number;
                usuario: string;
                img_perfil: string;
                comentario: string;
                likes: number;
                fecha: string;
                hora: string;
            }[]; 
        }[];
    };
}

const ComentariosModal: React.FC<ComentariosModalProps> = ({ modalVisible, toggleModal, datos }) => {
    const [respuesta, setRespuesta] = useState('');
    const [comentarioSeleccionado, setComentarioSeleccionado] = useState<number | null>(null);
    const [respuestasVisibles, setRespuestasVisibles] = useState<Set<number>>(new Set());

    const handleResponder = (idComentario: number) => {
        setComentarioSeleccionado(idComentario);
    };

    const handleEnviarRespuesta = () => {
        if (respuesta.trim() !== '') {
            console.log('Respuesta enviada:', respuesta);
        }
        setRespuesta('');
        setComentarioSeleccionado(null);
    };

    const handleCerrarModoRespuesta = () => {
        setComentarioSeleccionado(null);
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

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={toggleModal}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>Comentarios</Text>
                        <TouchableOpacity onPress={toggleModal} style={styles.btnCerrarModal}>
                            <FontAwesome name="close" size={24} color="#666" />
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={datos.comentarios}
                        keyExtractor={(item) => item.id_comentario.toString()}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.comentariosList}
                        renderItem={({ item }) => (
                            <View style={styles.comentario}>
                                <View style={styles.comentarioHeader}>
                                    <Image source={{ uri: item.img_perfil }} style={styles.imgPerfil} />
                                    <Text style={styles.usuario}>{item.usuario}</Text>
                                </View>
                                <Text style={styles.textoComentario}>{item.comentario}</Text>
                                <Text style={styles.fecha}>{item.fecha} a las {item.hora}</Text>
                                <Text style={styles.likes}><FontAwesome name="heart" size={16} color="#666" /> {item.likes}</Text>
                                <View style={[{flexDirection: "row",gap:"10",alignContent: "center"}, ]}>
                                    <TouchableOpacity onPress={() => handleResponder(item.id_comentario)}>
                                        <Text> Responder </Text>
                                    </TouchableOpacity>

                                    {/* Botón para ver respuestas */}
                                    {item.respuestas.length > 0 && (
                                        <TouchableOpacity onPress={() => toggleRespuestasVisibles(item.id_comentario)}>
                                            <Text>
                                                {respuestasVisibles.has(item.id_comentario) ? 'Ocultar respuestas' : 'Ver respuestas'}
                                            </Text>
                                        </TouchableOpacity>
                                    )}
                                </View>
                                

                                {/* Mostrar respuestas solo si están visibles */}
                                {respuestasVisibles.has(item.id_comentario) && item.respuestas.length > 0 && (
                                    <View style={styles.respuestasContainer}>
                                        {item.respuestas.map((resp, index) => (
                                            <View key={index} style={styles.respuesta}>
                                                <View style={styles.comentarioHeader}>
                                                    <Image source={{ uri: resp.img_perfil }} style={styles.imgPerfilSmall} />
                                                    <Text style={styles.usuario}>{resp.usuario}</Text>
                                                </View>
                                                <Text style={styles.textoComentario}>{resp.comentario}</Text>
                                                <Text style={styles.fecha}>{resp.fecha} a las {resp.hora}</Text>
                                                <Text style={styles.likes}><FontAwesome name="heart" size={16} color="#666" /> {resp.likes}</Text>
                                            </View>
                                        ))}
                                    </View>
                                )}
                            </View>
                        )}
                    />
                </View>

                {/* Input para escribir comentario o respuesta */}
                <View style={styles.inputContainer}>
                    {/* Mostrar el mensaje solo cuando estamos en "Modo Responder" */}
                    {comentarioSeleccionado && (
                        <View style={styles.modoContainer}>
                            <Text style={styles.modoTexto}>Modo Responder</Text>
                            <TouchableOpacity onPress={handleCerrarModoRespuesta}>
                                <Text style={styles.closeTexto}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                    {/* Input y Botón alineados horizontalmente */}
                    <View style={[{flexDirection: "row"}]}>
                        <TextInput
                            style={styles.inputComentario}
                            value={respuesta}
                            onChangeText={setRespuesta}
                            placeholder={comentarioSeleccionado ? "Escribe tu respuesta..." : "Escribe un comentario..."}
                            placeholderTextColor="#999"
                        />
                        <TouchableOpacity onPress={handleEnviarRespuesta} style={styles.botonEnviar}>
                            <Text style={styles.btnText}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};
export default ComentariosModal;

const styles = StyleSheet.create({
    modoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    closeTexto: {
        fontSize: 16,
        color: '#007bff',
        marginLeft: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
    },
    modalContent: {
        width: '100%',
        maxHeight: '90%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'flex-start',
        overflow: 'hidden',
        flex: 1, // Esto asegura que el contenido use todo el espacio disponible
    },
    modalHeader: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btnCerrarModal: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    comentario: {
        marginBottom: 15,
    },
    comentarioHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    imgPerfil: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    usuario: {
        fontWeight: 'bold',
    },
    textoComentario: {
        marginVertical: 5,
        fontSize: 14,
        color: '#333',
    },
    fecha: {
        fontSize: 12,
        color: '#777',
    },
    likes: {
        fontSize: 12,
    },
    respuestasContainer: {
        marginTop: 10,
        paddingLeft: 20,
    },
    respuesta: {
        marginBottom: 10,
    },
    imgPerfilSmall: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 8,
    },
    comentariosList: {
        flexGrow: 1, // Esto asegura que la lista de comentarios se expanda y utilice el espacio restante
    },
    modoTexto: {
        fontSize: 14,
        color: '#555',
        fontStyle: 'italic',
    },
    inputContainer: {
        position: 'absolute', // Esto asegura que el input se quede siempre en la parte inferior
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    inputComentario: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginRight: 10,
    },
    botonEnviar: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 20,
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
    },
});