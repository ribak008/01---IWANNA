import React, { useState } from 'react';
import { Pressable, View, Text, TextInput, StyleSheet, Button, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const router = useRouter();
    useEffect(() => {
        console.log('Pantalla de Login (Account/index.tsx) renderizada');
    }, []);


    const iniciarSesion = () => {
        alert(`Usuario: ${usuario}\nContraseña: ${contrasena}`);
    };

    const handleLogin = () => {
        // Aquí iría tu lógica de autenticación (si la tienes)
        console.log('Botón Entrar presionado');

        // Navega a la ruta principal de las pestañas
        router.push('(tabs)');
    };
    const handleGoToRegister = () => {
        router.push('Register'); // Navega a la ruta /Account/Register
    };

    const handleGoToRecover = () => {
        router.push('Recover'); // Navega a la ruta /Account/Recover
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
            <Pressable onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </Pressable>

            <Pressable onPress={handleGoToRecover} style={styles.buttonHelp}>
                <Text style={styles.buttonText}>He olvidado mi contraseña</Text>
            </Pressable>

            <Pressable onPress={handleGoToRegister} style={styles.buttonHelp}>
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