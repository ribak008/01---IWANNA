import React, { useState } from 'react';
import { Pressable, View, Text, TextInput, StyleSheet, Button, Image } from 'react-native';

const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    const iniciarSesion = () => {
        alert(`Usuario: ${usuario}\nContraseña: ${contrasena}`);
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/icons/logo.jpg')}
                style={styles.logo}
            />

            <TextInput
                style={styles.input}
                placeholder="Usuario"
                value={usuario}
                onChangeText={setUsuario}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={contrasena}
                onChangeText={setContrasena}
                secureTextEntry={true}
            />
            <Pressable onPress={iniciarSesion} style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </Pressable>

            <Pressable onPress={iniciarSesion} style={styles.buttonHelp}>
                <Text style={styles.buttonText}>He olvidado mi contraseña</Text>
            </Pressable>

            <Pressable onPress={iniciarSesion} style={styles.buttonHelp}>
                <Text style={styles.buttonText}>Crear cuenta</Text>
            </Pressable>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 45,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#8BC34A',
        width: 100,
        height: 40,
        margin: 10,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#424242',
        fontWeight: '300',
        fontFamily: 'Roboto',
    },

    buttonHelp: {
        margin: 5,

    },
    logo: {
        resizeMode: 'center', // Ajusta la imagen al contenedor
        width: 300, // Ancho de la imagen
        height: 300, // Alto de la imagen
        marginBottom: 0, // Espacio entre la imagen y el input
    },
});

export default Login;