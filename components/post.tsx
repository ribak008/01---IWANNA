import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, TouchableOpacity, Modal, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
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
    const manejarCargaImagen = () => {
        setCargando(false); 
    };

    //MANEJO DE MODAL
    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <View style={styles.contenedor_post}>
            {/* FOTO USUARIO */}
            <View style={styles.info_usuario}>
                <Image source={{ uri: datos.img_perfil }} style={styles.foto_usuario} />
                <View>
                    <Text style={styles.nombre}>{datos.nombre}</Text>
                    <Text>{datos.profesion}</Text>
                </View>
            </View>

            {/* IMAGEN POST */}
            {cargando && (
                <View style={{ height: 300, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#8BC34A" /> 
                </View>
            )}

            <Image
                source={{ uri: datos.img_post }}
                style={[styles.imagen_post, cargando && { opacity: 0, height:0}]} 
                resizeMode="cover"
                onLoad={manejarCargaImagen} 
            />

            {/* ICONOS */}
            <View style={styles.contenedor_datos_post}>
                <View style={styles.dato_post}> 
                    <FontAwesome name="heart" size={24} color="#8bc34a" />
                    <Text style={styles.icono}>{datos.likes}</Text>
                </View>

                <TouchableOpacity style={styles.dato_post} onPress={toggleModal}>
                    <FontAwesome name="comment" size={24} color="#424242" />
                    <Text style={styles.icono}>{datos.cant_comentarios}</Text>
                </TouchableOpacity>
            </View>

            {/* DESCRIPCION */}
            <Text style={styles.descripcion}>
                <Text style={styles.nombre}>{datos.nombre} </Text>
                {datos.descripcion}
            </Text>

            <ComentariosModal
                modalVisible={modalVisible}
                toggleModal={toggleModal}
                datos={datos}
            />
        </View>
    );
}

export default Post;

const styles = StyleSheet.create({
    contenedor_post: {
        backgroundColor: '#fff',
        marginBottom: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
    },
    info_usuario: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
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
    icono: {
        fontWeight: 'bold',
        marginBottom: 4,
    },
    descripcion: {
        marginBottom: 4,
    },
    contenedor_datos_post: { 
        flexDirection: 'row',
        gap: 10,
    },
    dato_post: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        paddingBottom: 5,
    },
});

