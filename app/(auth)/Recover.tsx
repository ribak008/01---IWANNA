import { Pressable, View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';

const Recover = () => {
    const [correo, setCorreo] = useState('');

    const handleRecover = () => {
        if (!correo) {
            Alert.alert('Error', 'El campo de correo es obligatorio.');
            return;
        }

        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correoRegex.test(correo)) {
            Alert.alert('Error', 'Por favor, ingresa un correo válido.');
            return;
        }

        Alert.alert('Recuperación', `Se ha enviado un enlace de recuperación a: ${correo}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recuperar Contraseña</Text>
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                value={correo}
                onChangeText={setCorreo}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <Pressable onPress={handleRecover} style={styles.button}>
                <Text style={styles.buttonText}>Enviar</Text>
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
        backgroundColor: 'white',
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
        color: '#424242',
        fontWeight: 400,
    },
});

export default Recover;