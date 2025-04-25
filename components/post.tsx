import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, TouchableOpacity, Modal, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ComentariosModal from './comentarios';

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

type Props = {
    datos: {
        id: number,
        nombre: string,
        profesion: string,
        img_perfil: string,
        img_post: string,
        descripcion: string,
        likes: number,
        cant_comentarios: number,
        comentarios: Comentario[]
    },

};

const Post: React.FC<Props> = ({ datos}) => {
    //CARGA DE IAMGEN
    const [cargando, setCargando] = useState(true);
    const [liked, setLiked] = useState(false);
    const manejarCargaImagen = () => {
        setCargando(false); 
    };

    //MANEJO DE MODAL
    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <TouchableOpacity style={styles.container} onPress={toggleModal}>
            <Image source={{ uri: datos.img_perfil }} style={styles.foto_usuario} />
            <View style={styles.content}>
                <Text style={styles.nombre}>{datos.nombre}</Text>
                <Text>{datos.profesion}</Text>
                <Image
                    source={{ uri: datos.img_post }}
                    style={[styles.imagen_post, cargando && { opacity: 0, height:0}]} 
                    resizeMode="cover"
                    onLoad={manejarCargaImagen} 
                />
                <View style={styles.contenedor_datos_post}>
                    <TouchableOpacity style={styles.dato_post} onPress={toggleLike}> 
                        <Ionicons 
                            name={liked ? "heart" : "heart-outline"} 
                            size={24} 
                            color={liked ? "#8BC34A" : "#424242"} 
                        />
                        <Text style={styles.icono}>{datos.likes}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.dato_post} onPress={toggleModal}>
                        <Ionicons name="chatbubble-outline" size={24} color="#424242" />
                        <Text style={styles.icono}>{datos.cant_comentarios}</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.descripcion}>
                    <Text style={styles.nombre}>{datos.nombre} </Text>
                    {datos.descripcion}
                </Text>
            </View>
            <ComentariosModal
                modalVisible={modalVisible}
                toggleModal={toggleModal}
                datos={datos}
            />
        </TouchableOpacity>
    );
}

export default Post;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    foto_usuario: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    nombre: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    imagen_post: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginVertical: 10,
    },
    content: {
        padding: 15,
    },
    descripcion: {
        marginBottom: 4,
    },
    contenedor_datos_post: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dato_post: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    icono: {
        marginLeft: 5,
        color: '#666',
        fontSize: 14,
    },
});

