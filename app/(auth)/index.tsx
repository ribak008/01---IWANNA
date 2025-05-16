import React, { useState, useRef } from 'react';
import { Pressable, View, Text, TextInput, StyleSheet, Image, KeyboardAvoidingView, Platform, TouchableOpacity, Animated, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { guardarStorage} from '../../services/asyncStorage';
import { Usuario } from '../../types/usuario'

// LOGIN 
const Login = () => {
    const [email, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    // Animaciones
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const shakeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        console.log('Pantalla de Login renderizada');
    }, []);

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

    const handleLogin = async () => {
        if (!email || !contrasena) {
            shake();
            Alert.alert('Error', 'Por favor, completa todos los campos');
            return;
        }

        if (!isValidEmail) {
            shake();
            Alert.alert('Error', 'Por favor, ingresa un correo válido');
            return;
        }

        setIsLoading(true);
        try {
            //INGRESA AL HOME
            await signInWithEmailAndPassword(auth, email, contrasena);
            const usuarioDatos = await obtenerUsuario(email);
            if(!usuarioDatos){
                shake();
                Alert.alert('Error', 'No se encontro datos en la base de datos');
                return;
            }
            guardarStorage("usuario",usuarioDatos);


            router.push('(tabs)');
        } catch (error: any) {
            let errorMessage = 'Error al iniciar sesión';
            if (error.code === 'auth/user-not-found') {
                errorMessage = 'Usuario no encontrado';
            } else if (error.code === 'auth/wrong-password') {
                errorMessage = 'Contraseña incorrecta';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'Correo electrónico inválido';
            }
            Alert.alert('Error', errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoToRegister = () => {
        router.push('Register_one');
    };

    const handleGoToRecover = () => {
        router.push('Recover');
    };

    const obtenerUsuario = async (email: string): Promise<Usuario | null> => {
        const urlApi = `${process.env.API_URL}/usuarios/${email}`;

        try {
            const res = await fetch(urlApi);

            if (!res.ok) {
                throw new Error(`Error al consultar la API. Status: ${res.status}`);
            }

            const data: Usuario = await res.json();
            return data;
            } catch (error) {
                console.error('Error al obtener usuario:', error);
                return null;
            }
    };
    
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.contentContainer}>
                <Image
                    source={require('../../assets/images/icons/logo-nuevo.png')}
                    style={styles.logo}
                />

                <Text style={styles.title}>Bienvenido</Text>
                <Text style={styles.subtitle}>Inicia sesión para continuar</Text>

                <Animated.View 
                    style={[
                        styles.inputContainer,
                        !isValidEmail && email.length > 0 && styles.inputError,
                        { transform: [{ translateX: shakeAnim }] }
                    ]}
                >
                    <Ionicons 
                        name="mail-outline" 
                        size={20} 
                        color={!isValidEmail && email.length > 0 ? '#FF3B30' : '#666'} 
                        style={styles.inputIcon} 
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Correo electrónico"
                        value={email}
                        onChangeText={(text) => {
                            setUsuario(text);
                            validateEmail(text);
                        }}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        accessibilityLabel="Correo electrónico"
                        accessibilityHint="Ingresa tu correo electrónico"
                    />
                </Animated.View>
                {!isValidEmail && email.length > 0 && (
                    <Text style={styles.errorText}>Por favor, ingresa un correo válido</Text>
                )}

                <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        value={contrasena}
                        onChangeText={setContrasena}
                        secureTextEntry={!showPassword}
                        accessibilityLabel="Contraseña"
                        accessibilityHint="Ingresa tu contraseña"
                    />
                    <TouchableOpacity 
                        onPress={() => setShowPassword(!showPassword)}
                        style={styles.eyeIcon}
                    >
                        <Ionicons 
                            name={showPassword ? "eye-outline" : "eye-off-outline"} 
                            size={20} 
                            color="#666" 
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={handleLogin}
                >
                    <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.recoverButton}
                    onPress={handleGoToRecover}
                >
                    <Text style={styles.recoverButtonText}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>

                <View style={styles.registerContainer}>
                    <Text style={styles.registerText}>¿No tienes una cuenta? </Text>
                    <TouchableOpacity onPress={handleGoToRegister}>
                        <Text style={styles.registerLink}>Regístrate</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity 
                    style={styles.skipButton}
                    onPress={() => router.push('(tabs)/(inicio)')}
                >
                    <Text style={styles.skipButtonText}>Continuar sin registrarme</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
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
    },
    subtitle: {
        fontSize: 16,
        color: '#64748B',
        marginBottom: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15,
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
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 50,
        color: '#1E293B',
    },
    eyeIcon: {
        padding: 10,
    },
    loginButton: {
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
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    recoverButton: {
        marginTop: 16,
        padding: 10,
        alignItems: 'center',
    },
    recoverButtonText: {
        color: '#3B82F6',
        fontSize: 14,
        fontWeight: '500',
    },
    registerContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
    },
    registerText: {
        color: '#64748B',
        fontSize: 14,
    },
    registerLink: {
        color: '#3B82F6',
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 4,
    },
    skipButton: {
        marginTop: 20,
        padding: 10,
    },
    skipButtonText: {
        color: '#64748B',
        fontSize: 14,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
});

export default Login;