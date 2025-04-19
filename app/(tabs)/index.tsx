import React from 'react';
import { FlatList, View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import HeaderPrincipal from '../../components/Header';
import Post from '../../components/post';
import { FontAwesome } from '@expo/vector-icons';
import { useEffect } from 'react';

const posts = [
    {
        id: 1,
        nombre: 'juanito_dev',
        profesion: 'Desarrollador Frontend',
        img_perfil: 'https://randomuser.me/api/portraits/men/32.jpg',
        img_post: 'https://picsum.photos/600/600?random=1',
        descripcion: 'Un día soleado en la playa 🌞🏖️',
        likes: 132,
        cant_comentarios: 5,
        comentarios: [
            {
                id_post: 1,
                id_comentario: 101,
                usuario: 'codinglife',
                img_perfil: 'https://randomuser.me/api/portraits/men/55.jpg',
                comentario: '¡Se ve increíble ese lugar!',
                likes: 5,
                respuestas: [
                    {
                        id_post: 1,
                        id_comentario: 201,
                        usuario: 'juanito_dev',
                        img_perfil: 'https://randomuser.me/api/portraits/men/32.jpg',
                        comentario: 'Sí, fue un viaje épico 😎',
                        likes: 2,
                        fecha: '2025-04-19',
                        hora: '10:30',
                        respuestas: [],
                    }
                ],
                fecha: '2025-04-18',
                hora: '14:20',
            },
            {
                id_post: 1,
                id_comentario: 102,
                usuario: 'coder_boy',
                img_perfil: 'https://randomuser.me/api/portraits/men/78.jpg',
                comentario: '¡Qué buen lugar para descansar!',
                likes: 3,
                respuestas: [
                    {
                        id_post: 1,
                        id_comentario: 202,
                        usuario: 'juanito_dev',
                        img_perfil: 'https://randomuser.me/api/portraits/men/32.jpg',
                        comentario: 'Sí, es el lugar perfecto para relajarse.',
                        likes: 1,
                        fecha: '2025-04-19',
                        hora: '12:45',
                        respuestas: [],
                    }
                ],
                fecha: '2025-04-18',
                hora: '16:00',
            },
            {
                id_post: 1,
                id_comentario: 103,
                usuario: 'tech_lover',
                img_perfil: 'https://randomuser.me/api/portraits/men/12.jpg',
                comentario: '¿Es difícil llegar hasta ahí?',
                likes: 8,
                respuestas: [
                    {
                        id_post: 1,
                        id_comentario: 203,
                        usuario: 'juanito_dev',
                        img_perfil: 'https://randomuser.me/api/portraits/men/32.jpg',
                        comentario: 'No, es bastante accesible, solo toma un par de horas.',
                        likes: 4,
                        fecha: '2025-04-19',
                        hora: '09:30',
                        respuestas: [],
                    }
                ],
                fecha: '2025-04-17',
                hora: '20:10',
            },
            {
                id_post: 1,
                id_comentario: 104,
                usuario: 'beach_vibes',
                img_perfil: 'https://randomuser.me/api/portraits/men/90.jpg',
                comentario: 'Qué bonito se ve ese atardecer.',
                likes: 7,
                respuestas: [
                    {
                        id_post: 1,
                        id_comentario: 204,
                        usuario: 'juanito_dev',
                        img_perfil: 'https://randomuser.me/api/portraits/men/32.jpg',
                        comentario: '¡Totalmente! Lo mejor es la paz que se siente allí.',
                        likes: 5,
                        fecha: '2025-04-18',
                        hora: '18:20',
                        respuestas: [],
                    }
                ],
                fecha: '2025-04-18',
                hora: '17:00',
            },
            {
                id_post: 1,
                id_comentario: 105,
                usuario: 'travel_guru',
                img_perfil: 'https://randomuser.me/api/portraits/men/67.jpg',
                comentario: '¿Dónde está ubicado ese lugar?',
                likes: 10,
                respuestas: [
                    {
                        id_post: 1,
                        id_comentario: 205,
                        usuario: 'juanito_dev',
                        img_perfil: 'https://randomuser.me/api/portraits/men/32.jpg',
                        comentario: 'Está en la costa del norte, un poco alejado, pero vale la pena.',
                        likes: 6,
                        fecha: '2025-04-19',
                        hora: '11:00',
                        respuestas: [],
                    }
                ],
                fecha: '2025-04-16',
                hora: '15:45',
            }
        ]
    },
    {
        id: 2,
        nombre: 'dev_marta',
        profesion: 'Desarrolladora Backend',
        img_perfil: 'https://randomuser.me/api/portraits/women/36.jpg',
        img_post: 'https://picsum.photos/600/600?random=2',
        descripcion: 'Nuevo proyecto en el que estoy trabajando 🚀',
        likes: 220,
        cant_comentarios: 4,
        comentarios: [
            {
                id_post: 2,
                id_comentario: 106,
                usuario: 'programmer_john',
                img_perfil: 'https://randomuser.me/api/portraits/men/33.jpg',
                comentario: '¡Qué proyecto tan interesante!',
                likes: 6,
                respuestas: [],
                fecha: '2025-04-18',
                hora: '13:15',
            },
            {
                id_post: 2,
                id_comentario: 107,
                usuario: 'web_dev_guy',
                img_perfil: 'https://randomuser.me/api/portraits/men/21.jpg',
                comentario: '¿De qué trata este proyecto?',
                likes: 3,
                respuestas: [
                    {
                        id_post: 2,
                        id_comentario: 208,
                        usuario: 'dev_marta',
                        img_perfil: 'https://randomuser.me/api/portraits/women/36.jpg',
                        comentario: 'Es una API para gestionar servicios de logística y envíos.',
                        likes: 2,
                        fecha: '2025-04-19',
                        hora: '08:30',
                        respuestas: [],
                    }
                ],
                fecha: '2025-04-18',
                hora: '14:00',
            },
            {
                id_post: 2,
                id_comentario: 108,
                usuario: 'frontend_master',
                img_perfil: 'https://randomuser.me/api/portraits/men/50.jpg',
                comentario: 'Me encantaría saber más sobre esta API.',
                likes: 4,
                respuestas: [],
                fecha: '2025-04-18',
                hora: '17:00',
            },
            {
                id_post: 2,
                id_comentario: 109,
                usuario: 'fullstack_dev',
                img_perfil: 'https://randomuser.me/api/portraits/men/11.jpg',
                comentario: 'Este tipo de proyectos siempre son útiles.',
                likes: 9,
                respuestas: [
                    {
                        id_post: 2,
                        id_comentario: 209,
                        usuario: 'dev_marta',
                        img_perfil: 'https://randomuser.me/api/portraits/women/36.jpg',
                        comentario: 'Totalmente de acuerdo, la logística es clave en el comercio.',
                        likes: 5,
                        fecha: '2025-04-19',
                        hora: '09:00',
                        respuestas: [],
                    }
                ],
                fecha: '2025-04-18',
                hora: '19:00',
            }
        ]
    }
    // Puedes seguir agregando más posts de la misma manera
];






const Home = () => {
    useEffect(() => {
        console.log('Pantalla de Home (tabs/index.tsx) renderizada');
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* CABEZERA */}


            {/* DATA */}
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                <Post datos={item}/>
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

    contenedor_datos_post: {
        flexDirection: 'row',
        gap: 10
    },

    dato_post: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        paddingBottom: 5,
    }
});

