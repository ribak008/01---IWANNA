import { View, Text, TextInput, StyleSheet, Alert, KeyboardAvoidingView, Platform, TouchableOpacity, Image, Animated } from 'react-native';
import React, { useState, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { auth } from '../../config/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const Recover = () => {
    const [correo, setCorreo] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    // Animaciones
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const shakeAnim = useRef(new Animated.Value(0)).current;

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(email));
    };

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

    const shake = () => {
        Animated.sequence([
            Animated.timing(shakeAnim, { toValue: 10, duration: 100, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: -10, duration: 100, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: 10, duration: 100, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: 0, duration: 100, useNativeDriver: true })
        ]).start();
    };

    const handleRecover = async () => {
        if (!correo) {
            shake();
            Alert.alert('Error', 'El campo de correo es obligatorio.');
            return;
        }

        if (!isValidEmail) {
            shake();
            Alert.alert('Error', 'Por favor, ingresa un correo válido.');
            return;
        }

        setIsLoading(true);
        try {
            await sendPasswordResetEmail(auth, correo);
            Alert.alert(
                'Correo enviado',
                'Se ha enviado un enlace de recuperación a tu correo electrónico. Por favor, revisa tu bandeja de entrada.',
                [
                    {
                        text: 'OK',
                        onPress: () => router.back()
                    }
                ]
            );
        } catch (error: any) {
            let errorMessage = 'Error al enviar el correo de recuperación';
            if (error.code === 'auth/user-not-found') {
                errorMessage = 'No existe una cuenta con este correo electrónico';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'El correo electrónico no es válido';
            }
            Alert.alert('Error', errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoBack = () => {
        router.back();
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.scrollContainer}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color="#333" />
                    </TouchableOpacity>
                </View>

                <Image
                    source={require('../../assets/images/icons/logo-nuevo.png')}
                    style={styles.logo}
                />

                <Text style={styles.title}>Recuperar Contraseña</Text>
                <Text style={styles.subtitle}>
                    Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña
                </Text>

                <Animated.View 
                    style={[
                        styles.inputContainer,
                        !isValidEmail && correo.length > 0 && styles.inputError,
                        { transform: [{ translateX: shakeAnim }] }
                    ]}
                >
                    <Ionicons 
                        name="mail-outline" 
                        size={20} 
                        color={!isValidEmail && correo.length > 0 ? '#FF3B30' : '#666'} 
                        style={styles.inputIcon} 
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Correo electrónico"
                        value={correo}
                        onChangeText={(text) => {
                            setCorreo(text);
                            validateEmail(text);
                        }}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        accessibilityLabel="Correo electrónico"
                        accessibilityHint="Ingresa tu correo electrónico para recuperar tu contraseña"
                    />
                </Animated.View>
                {!isValidEmail && correo.length > 0 && (
                    <Text style={styles.errorText}>Por favor, ingresa un correo válido</Text>
                )}

                <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                    <TouchableOpacity 
                        onPress={handleRecover} 
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}
                        style={[
                            styles.recoverButton,
                            isLoading && styles.recoverButtonDisabled
                        ]}
                        disabled={isLoading}
                    >
                        <Text style={styles.recoverButtonText}>
                            {isLoading ? 'Enviando...' : 'Enviar Enlace'}
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: '100%',
    },
    backButton: {
        padding: 10,
        marginRight: 10,
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 30,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1E293B',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#64748B',
        marginBottom: 30,
        textAlign: 'center',
    },
    formContainer: {
        gap: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 10,
        paddingHorizontal: 15,
        backgroundColor: '#F8FAFC',
    },
    inputError: {
        borderColor: '#EF4444',
    },
    errorText: {
        color: '#EF4444',
        fontSize: 12,
        marginTop: -15,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 50,
        color: '#1E293B',
    },
    recoverButton: {
        width: '100%',
        backgroundColor: '#3B82F6',
        padding: 16,
        borderRadius: 12,
        marginTop: 30,
        alignItems: 'center',
        ...Platform.select({
            ios: {
                shadowColor: '#3B82F6',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    recoverButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    recoverButtonDisabled: {
        opacity: 0.7,
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

export default Recover;