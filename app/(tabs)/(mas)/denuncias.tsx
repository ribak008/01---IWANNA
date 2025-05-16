import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function Denuncias() {
    const [motivo, setMotivo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = () => {
        // Aquí iría la lógica para enviar la denuncia
        console.log('Denuncia enviada:', { motivo, descripcion });
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView 
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.container}>
                    {/* Sección Informativa */}
                    <View style={styles.infoSection}>
                        <View style={styles.iconContainer}>
                            <Ionicons name="alert-circle-outline" size={32} color="#3B82F6" />
                        </View>
                        <Text style={styles.infoTitle}>¿Por qué denunciar?</Text>
                        <Text style={styles.infoText}>
                            Tu denuncia nos ayuda a mantener IWANNA como un espacio seguro y confiable para todos. 
                            Cada reporte es revisado cuidadosamente por nuestro equipo.
                        </Text>
                    </View>

                    {/* Formulario de Denuncia */}
                    <View style={styles.formSection}>
                        <Text style={styles.formTitle}>Formulario de Denuncia</Text>
                        
                        {/* Motivo de la denuncia */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Motivo de la denuncia</Text>
                            <TextInput
                                style={styles.input}
                                value={motivo}
                                onChangeText={setMotivo}
                                placeholder="Selecciona el motivo de tu denuncia"
                                placeholderTextColor="#94A3B8"
                            />
                        </View>

                        {/* Descripción */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Descripción detallada</Text>
                            <TextInput
                                style={[styles.input, styles.textArea]}
                                value={descripcion}
                                onChangeText={setDescripcion}
                                placeholder="Describe la situación en detalle"
                                placeholderTextColor="#94A3B8"
                                multiline
                                numberOfLines={4}
                                textAlignVertical="top"
                            />
                        </View>

                        {/* Botón de envío */}
                        <TouchableOpacity 
                            style={styles.submitButton}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.submitButtonText}>Enviar Denuncia</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Sección de Información Adicional */}
                    <View style={styles.additionalInfoSection}>
                        <Text style={styles.additionalInfoTitle}>Información Importante</Text>
                        <View style={styles.infoItem}>
                            <Ionicons name="shield-checkmark-outline" size={24} color="#3B82F6" />
                            <Text style={styles.infoItemText}>
                                Todas las denuncias son tratadas con absoluta confidencialidad
                            </Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Ionicons name="time-outline" size={24} color="#3B82F6" />
                            <Text style={styles.infoItemText}>
                                Nuestro equipo revisará tu denuncia en un plazo máximo de 24 horas
                            </Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Ionicons name="mail-outline" size={24} color="#3B82F6" />
                            <Text style={styles.infoItemText}>
                                Recibirás una notificación sobre el estado de tu denuncia
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F8FAFC',
    },
    scrollView: {
        flex: 1,
    },
    scrollContainer: {
        paddingBottom: 40,
    },
    container: {
        flex: 1,
        padding: 16,
    },
    infoSection: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 20,
        marginBottom: 24,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    iconContainer: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#EFF6FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    infoTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#1E40AF',
        marginBottom: 8,
        textAlign: 'center',
    },
    infoText: {
        fontSize: 16,
        color: '#475569',
        textAlign: 'center',
        lineHeight: 24,
    },
    formSection: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 20,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    formTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#1E40AF',
        marginBottom: 20,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: '#1E293B',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#F8FAFC',
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
        color: '#1E293B',
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    textArea: {
        height: 120,
        textAlignVertical: 'top',
    },
    submitButton: {
        backgroundColor: '#3B82F6',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        marginTop: 8,
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    additionalInfoSection: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 20,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    additionalInfoTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#1E40AF',
        marginBottom: 16,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    infoItemText: {
        flex: 1,
        fontSize: 16,
        color: '#475569',
        marginLeft: 12,
        lineHeight: 24,
    },
});