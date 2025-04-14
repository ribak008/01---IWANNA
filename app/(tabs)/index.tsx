import React from 'react';
import { FlatList, View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import HeaderPrincipal from '../../components/Header';
import Post from '../../components/post';
import { FontAwesome } from '@expo/vector-icons';

const posts = [ 
    {
        id: 1,
        nombre: 'juanito_dev',
        profesion: 'Desarrollador Frontend',
        img_perfil: 'https://randomuser.me/api/portraits/men/32.jpg',
        img_post: 'https://picsum.photos/600/600?random=1',
        descripcion: 'Un día soleado en la playa 🌞🏖️',
        likes: 132,
        comentarios: 5
    },
    {
        id: 2,
        nombre: 'codinglife',
        profesion: 'Ingeniero de Software',
        img_perfil: 'https://randomuser.me/api/portraits/men/55.jpg',
        img_post: 'https://picsum.photos/600/600?random=2',
        descripcion: 'Codificando con café ☕👨‍💻',
        likes: 210,
        comentarios: 2
    },
    {
        id: 3,
        nombre: 'tech_girl',
        profesion: 'Diseñadora UX/UI',
        img_perfil: 'https://randomuser.me/api/portraits/women/45.jpg',
        img_post: 'https://picsum.photos/600/600?random=3',
        descripcion: 'Trabajando en un nuevo proyecto 💻🎨',
        likes: 154,
        comentarios: 7
    },
    {
        id: 4,
        nombre: 'marky_mark',
        profesion: 'Desarrollador Backend',
        img_perfil: 'https://randomuser.me/api/portraits/men/48.jpg',
        img_post: 'https://picsum.photos/600/600?random=4',
        descripcion: '¡El código nunca para! 💻⚡',
        likes: 98,
        comentarios: 1
    },
    {
        id: 5,
        nombre: 'luisdev',
        profesion: 'DevOps Engineer',
        img_perfil: 'https://randomuser.me/api/portraits/men/72.jpg',
        img_post: 'https://picsum.photos/600/600?random=5',
        descripcion: 'Automatizando todo lo que puedo 🔧🖥️',
        likes: 45,
        comentarios: 3
    },
    {
        id: 6,
        nombre: 'mariah_tech',
        profesion: 'Data Scientist',
        img_perfil: 'https://randomuser.me/api/portraits/women/23.jpg',
        img_post: 'https://picsum.photos/600/600?random=6',
        descripcion: 'Análisis de datos en progreso 📊🔍',
        likes: 233,
        comentarios: 6
    },
    {
        id: 7,
        nombre: 'susanadev',
        profesion: 'Full Stack Developer',
        img_perfil: 'https://randomuser.me/api/portraits/women/36.jpg',
        img_post: 'https://picsum.photos/600/600?random=7',
        descripcion: 'Me encanta construir aplicaciones web completas 💻🌐',
        likes: 180,
        comentarios: 10
    },
    {
        id: 8,
        nombre: 'juancho_loco',
        profesion: 'Tester de Software',
        img_perfil: 'https://randomuser.me/api/portraits/men/61.jpg',
        img_post: 'https://picsum.photos/600/600?random=8',
        descripcion: 'Encontrando bugs como siempre 🐞💥',
        likes: 60,
        comentarios: 4
    },
    {
        id: 9,
        nombre: 'pedrogaming',
        profesion: 'Desarrollador de Juegos',
        img_perfil: 'https://randomuser.me/api/portraits/men/19.jpg',
        img_post: 'https://picsum.photos/600/600?random=9',
        descripcion: 'Creando mi próximo juego 🎮👾',
        likes: 320,
        comentarios: 8
    },
    {
        id: 10,
        nombre: 'carla_crea',
        profesion: 'Web Designer',
        img_perfil: 'https://randomuser.me/api/portraits/women/56.jpg',
        img_post: 'https://picsum.photos/600/600?random=10',
        descripcion: 'Diseñando un nuevo layout para un cliente 💻🎨',
        likes: 150,
        comentarios: 5
    },
];



const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* CABEZERA */}
           
            
            {/* DATA */}
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                <Post datos={item} />
            )}/>
        </SafeAreaView>
    );
};

export default Home;

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

    contenedor_datos_post:{ 
        flexDirection: 'row',
        gap:10},

    dato_post:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        paddingBottom: 5,
    }
});

