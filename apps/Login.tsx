import React from 'react';
import { View } from 'react-native';
import Boton from '../components/boton';

const Login = () => {
    const iniciarSesion = () => {
        console.log("Iniciando sesión...");
    };

    return (
        <View>
            <Boton titulo="Entrar" onPress={iniciarSesion} />
        </View>
    );
};

export default Login;