import React from 'react';
import { FlatList, View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import HeaderPrincipal from '../components/Header';
import { FontAwesome } from '@expo/vector-icons';



const posts = [ 
    {
        id: '1',
        nombre: 'juanito_dev',
        profesion: 'Desarrollador Frontend',
        profilePic: 'https://randomuser.me/api/portraits/men/32.jpg',
        image: 'https://picsum.photos/600/600?random=1',
        descripcion: 'Un día soleado en la playa 🌞🏖️',
        icono: 132,
        comments: [
            { id: '1', user: 'maria123', text: '¡Qué envidia! 😍' },
            { id: '2', user: 'coderlife', text: 'Disfruta hermano!' },
        ],
    },
    {
        id: '2',
        nombre: 'codinglife',
        profesion: 'Ingeniero de Software',
        profilePic: 'https://randomuser.me/api/portraits/men/55.jpg',
        image: 'https://picsum.photos/600/600?random=2',
        descripcion: 'Codificando con café ☕👨‍💻',
        icono: 210,
        comments: [
            { id: '1', user: 'devgirl', text: 'Mood diario 🔥' },
        ],
    },
];


const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* CABEZERA */}
            <HeaderPrincipal/>
            
            {/* DATA */}
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <View style={styles.contenedor_post}>
                    {/* FOTO USUARIO */}
                    <View style={styles.info_usuario}>
                        <Image source={{ uri: item.profilePic }} style={styles.foto_usuario} />
                        <View>
                            <Text style={styles.nombre}>{item.nombre}</Text>
                            <Text>{item.profesion}</Text>
                        </View>
                        
                    </View>

                    {/* IMAGEN POST */}
                    <Image source={{ uri: item.image }} style={styles.imagen_post} resizeMode="cover" />
                    
                    {/* ICONOS */}
                    <View style={styles.contenedor_datos_post}>
                        <View style={styles.dato_post}> 
                            <FontAwesome name="heart" size={24} color="#8bc34a" />
                            <Text style={styles.icono}>{item.icono}</Text>
                        </View>

                        <View style={styles.dato_post}>
                            <FontAwesome name="comment" size={24} color="#424242" />
                            <Text style={styles.icono}>{item.icono}</Text>
                        </View>
                    </View>
                    
                    {/* DESCRIPCION */}
                    <Text style={styles.descripcion}>
                        <Text style={styles.nombre}>{item.nombre} </Text>
                        {item.descripcion}
                    </Text>
                </View>
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

