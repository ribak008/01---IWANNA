import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Register_two_trabajador = () => {
    const router = useRouter();
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [rut, setRut] = useState('');
    const [profesion, setProfesion] = useState('');
    const [experiencia, setExperiencia] = useState('');

    const handleNext = () => {
        // Aquí iría la validación de campos
        router.push('Register_three');
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <TouchableOpacity 
                        style={styles.backButton}
                        onPress={() => router.back()}
                    >
                        <Ionicons name="arrow-back" size={24} color="#333" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Datos Personales</Text>
                </View>

                <Text style={styles.subtitle}>Por favor, completa tus datos personales y profesionales</Text>

                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <Ionicons name="person-outline" size={20} color="#666" style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Nombre"
                            value={nombre}
                            onChangeText={setNombre}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="person-outline" size={20} color="#666" style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Apellido"
                            value={apellido}
                            onChangeText={setApellido}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="call-outline" size={20} color="#666" style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Teléfono"
                            value={telefono}
                            onChangeText={setTelefono}
                            keyboardType="phone-pad"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="home-outline" size={20} color="#666" style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Dirección"
                            value={direccion}
                            onChangeText={setDireccion}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="card-outline" size={20} color="#666" style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="RUT"
                            value={rut}
                            onChangeText={setRut}
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="briefcase-outline" size={20} color="#666" style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Profesión"
                            value={profesion}
                            onChangeText={setProfesion}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="time-outline" size={20} color="#666" style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Años de experiencia"
                            value={experiencia}
                            onChangeText={setExperiencia}
                            keyboardType="numeric"
                        />
                    </View>
                </View>

                <TouchableOpacity 
                    style={styles.nextButton}
                    onPress={handleNext}
                >
                    <View style={[styles.buttonIcon, { backgroundColor: '#3B82F615' }]}>
                        <Ionicons name="arrow-forward" size={28} color="#3B82F6" />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.nextButtonText}>Siguiente</Text>
                        <Text style={styles.buttonSubText}>Continuar con el registro</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
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
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        padding: 10,
        marginRight: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1E293B',
    },
    subtitle: {
        fontSize: 16,
        color: '#64748B',
        marginBottom: 30,
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
    eyeIcon: {
        padding: 10,
    },
    registerButton: {
        backgroundColor: '#3B82F6',
        padding: 15,
        borderRadius: 10,
        marginTop: 30,
        alignItems: 'center',
    },
    registerButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    nextButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 16,
        marginTop: 30,
        marginBottom: 20,
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
    nextButtonText: {
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
});

export default Register_two_trabajador;
