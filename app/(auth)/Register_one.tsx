import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Register_one = () => {
    const router = useRouter();
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.spring(scaleAnim, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    const handleClientePress = () => {
        router.push('Register_two_cliente');
    };

    const handleTrabajadorPress = () => {
        router.push('Register_two_trabajador');
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Image
                    source={require('../../assets/images/icons/logo-nuevo.png')}
                    style={styles.logo}
                />
                
                <Text style={styles.title}>¿Cómo quieres registrarte?</Text>
                <Text style={styles.subtitle}>Selecciona el tipo de cuenta que deseas crear</Text>

                <Animated.View style={[styles.buttonContainer, { transform: [{ scale: scaleAnim }] }]}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={handleClientePress}
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}
                    >
                        <View style={[styles.buttonIcon, { backgroundColor: '#3B82F615' }]}>
                            <Ionicons name="person-outline" size={28} color="#3B82F6" />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.buttonText}>Cliente</Text>
                            <Text style={styles.buttonSubText}>Regístrate para contratar servicios</Text>
                        </View>
                        <View style={[styles.arrowContainer, { backgroundColor: '#3B82F615' }]}>
                            <Ionicons name="chevron-forward" size={24} color="#3B82F6" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.button}
                        onPress={handleTrabajadorPress}
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}
                    >
                        <View style={[styles.buttonIcon, { backgroundColor: '#3B82F615' }]}>
                            <Ionicons name="briefcase-outline" size={28} color="#3B82F6" />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.buttonText}>Trabajador</Text>
                            <Text style={styles.buttonSubText}>Regístrate para ofrecer servicios</Text>
                        </View>
                        <View style={[styles.arrowContainer, { backgroundColor: '#3B82F615' }]}>
                            <Ionicons name="chevron-forward" size={24} color="#3B82F6" />
                        </View>
                    </TouchableOpacity>
                </Animated.View>

                <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>¿Ya tienes una cuenta? </Text>
                    <TouchableOpacity onPress={() => router.push('/')}>
                        <Text style={styles.loginLink}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 30,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#64748B',
        marginBottom: 40,
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',
        gap: 20,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 16,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.15,
                shadowRadius: 8,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    buttonIcon: {
        width: 52,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 26,
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 8,
    },
    buttonText: {
        color: '#1E293B',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.3,
        marginBottom: 4,
    },
    buttonSubText: {
        color: '#64748B',
        fontSize: 14,
        lineHeight: 18,
    },
    arrowContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: 8,
    },
    loginContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
    },
    loginText: {
        color: '#64748B',
    },
    loginLink: {
        color: '#3B82F6',
        fontWeight: 'bold',
    },
});

export default Register_one;
