import { Pressable, View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';

const Register = () => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [contrasenaVal, setContrasenaVal] = useState('');

    const validarCorreo = (correo: string) => {
        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return correoRegex.test(correo);
    };

    const validarContrasena = (password: string) => {
        const contrasenaRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        // Requisitos:
        // - Al menos una letra mayúscula
        // - Al menos un número
        // - Al menos un símbolo especial
        // - Mínimo 8 caracteres
        return contrasenaRegex.test(password);
    };

    const handleRegister = () => {
        if (!usuario || !contrasena || !contrasenaVal) {
            Alert.alert('Error', 'Todos los campos son obligatorios.');
            return;
        }

        if (!validarCorreo(usuario)) {
            Alert.alert('Error', 'El usuario debe ser un correo válido.');
            return;
        }

        if (!validarContrasena(contrasena)) {
            Alert.alert(
                'Error',
                'La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo.'
            );
            return;
        }

        if (contrasena !== contrasenaVal) {
            Alert.alert('Error', 'Las contraseñas no coinciden.');
            return;
        }

        Alert.alert('Registro exitoso', `Usuario: ${usuario}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crear Cuenta!!</Text>

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
            <TextInput
                style={styles.input}
                placeholder="Repite Contraseña"
                value={contrasenaVal}
                onChangeText={setContrasenaVal}
                secureTextEntry={true}
            />
            <Pressable onPress={handleRegister} style={styles.button}>
                <Text style={styles.buttonText}>Registrarse</Text>
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
    title: {
        fontSize: 20,
        fontWeight: 300,
        marginBottom: 20,
    },

    input: {
        width: '90%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 45,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#00BCD4',
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 45,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Register;