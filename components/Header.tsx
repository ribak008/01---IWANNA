import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


export default function Header() {
    

    const handleLogout = () => {
        Alert.alert(
            'Cerrar sesión',
            '¿Estás seguro de que quieres cerrar sesión?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Cerrar sesión',
                    
                    style: 'destructive',
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleLogout} style={styles.profileContainer}>
                <Image
                    source={require('../assets/images/perfil.png')}
                    style={styles.userImage}
                />
            </TouchableOpacity>
            <Image
                source={require('../assets/images/logo.jpg')}
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        position: 'relative',
    },
    profileContainer: {
        position: 'absolute',
        left: 20,
    },
    logo: {
        width: 120,
        height: 50,
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
}); 