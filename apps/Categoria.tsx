import { Pressable, View, Text, TextInput, StyleSheet, FlatList, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importa la librería de íconos

const Categoria = () => {
    const [search, setSearch] = useState('');
    const [categorias, setCategorias] = useState([
        'Constructor',
        'Pintor',
        'Jardinero',
        'Electricista',
        'Plomero',
        'Carpintero',
        'Diseñador de interiores',
        'Cerrajero',
        'Mecánico',
        'Albañil',
    ]);


    const categoriasFiltradas = categorias.filter((categoria) =>
        categoria.toLowerCase().includes(search.toLowerCase())
    );


    const handlePressCategoria = (categoria: string) => {
        Alert.alert('Categoría seleccionada', `Has seleccionado: ${categoria}`);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.profileContainer}>
                    <Image
                        source={{ uri: 'https://via.placeholder.com/50' }} // URL de la foto de perfil
                        style={styles.profileImage}
                    />
                </View>
                <Image
                    source={require('../assets/images/icons/logo.jpg')} // Ruta del logo de la app
                    style={styles.logo}
                />
            </View>

            <Text style={styles.pageTitle}>Categoría</Text>

            <TextInput
                style={styles.searchInput}
                placeholder="Buscar categoría..."
                value={search}
                onChangeText={setSearch}
            />


            <FlatList
                data={categoriasFiltradas}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Pressable
                        style={styles.categoryItem}
                        onPress={() => handlePressCategoria(item)}
                    >
                        <Text style={styles.categoryText}>{item}</Text>
                        <Icon name="chevron-right" size={24} color="#00BCD4" />
                    </Pressable>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Centra el contenido horizontalmente
        marginBottom: 20,
        position: 'relative', // Permite posicionar elementos dentro del header
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25, // Hace que la imagen sea circular
        backgroundColor: '#ccc', // Color de fondo si no hay imagen
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain', // Ajusta el tamaño del logo
    },
    searchInput: {
        width: '90%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 45,
        marginBottom: 20,
        paddingHorizontal: 15,
        backgroundColor: '#f9f9f9',
    },
    categoryItem: {
        backgroundColor: '#F5F5F5',
        padding: 15,
        borderRadius: 45,
        marginBottom: 10,
        flexDirection: 'row', // Alinea el texto y el ícono en fila
        justifyContent: 'space-between', // Espacia el texto y el ícono
        alignItems: 'center',
    },
    categoryText: {
        color: '#8BC34A',
        fontWeight: 'bold',
        fontSize: 16,
    },
    profileContainer: {
        position: 'absolute', // Posiciona la foto de perfil en el lado izquierdo
        left: 0,
    },
    pageTitle: {
        width: '50%',
        alignSelf: 'center', // Centra todo el elemento horizontalmente
        textAlign: 'center', // Centra el texto dentro del elemento
        backgroundColor: '#8BC34A',
        padding: 15,
        marginBottom: 20,
        borderRadius: 45,
        fontSize: 18,
        fontWeight: '300',
        color: 'white',
        marginTop: 5,
    }
});

export default Categoria;