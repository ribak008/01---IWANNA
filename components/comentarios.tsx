import React from 'react';
import { Modal, FlatList, View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
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
                        renderItem={({ item }) => (
                            <View style={styles.comentario}>
                                <View style={styles.comentarioHeader}>
                                    <Image source={{ uri: item.img_perfil }} style={styles.imgPerfil} />
                                    <Text style={styles.usuario}>{item.usuario}</Text>
                                </View>
                                <Text style={styles.textoComentario}>{item.comentario}</Text>
                                <Text style={styles.fecha}>{item.fecha} a las {item.hora}</Text>
                                <Text style={styles.likes}><FontAwesome name="heart" size={16} color="#666" /> {item.likes}</Text>

                                {/* Respuestas */}
                                {item.respuestas.length > 0 && (
                                    <View style={styles.respuestasContainer}>
                                        {item.respuestas.map((resp, index) => (
                                            <View key={index} style={styles.respuesta}>
                                                <View style={styles.comentarioHeader}>
                                                    <Image
                                                        source={{ uri: resp.img_perfil }}
                                                        style={styles.imgPerfilSmall}
                                                    />
                                                    <Text style={styles.usuario}>{resp.usuario}</Text>
                                                </View>
                                                <Text style={styles.textoComentario}>{resp.comentario}</Text>
                                                <Text style={styles.fecha}>
                                                    {resp.fecha} a las {resp.hora}
                                                </Text>
                                                <Text style={styles.likes}><FontAwesome name="heart" size={16} color="#666" /> {resp.likes}</Text>
                                            </View>
                                        ))}
                                    </View>
                                )}
                            </View>
                        )}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
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
        alignItems: 'center',
        overflow: 'hidden',
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
    
    btnCerrarText: {
        fontSize: 20,
        color: '#666',
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
    btnText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ComentariosModal;
