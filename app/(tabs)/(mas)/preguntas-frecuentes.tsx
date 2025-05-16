import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

type FAQItem = {
    id: number;
    pregunta: string;
    respuesta: string;
    categoria: string;
};

export default function PreguntasFrecuentes() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            id: 1,
            categoria: "Cuenta y Perfil",
            pregunta: "¿Cómo puedo crear mi cuenta en IWANNA?",
            respuesta: "Para crear tu cuenta en IWANNA, simplemente descarga la aplicación, selecciona 'Registrarse' y sigue los pasos indicados. Necesitarás proporcionar tu información básica y verificar tu correo electrónico."
        },
        {
            id: 2,
            categoria: "Cuenta y Perfil",
            pregunta: "¿Cómo puedo editar mi perfil?",
            respuesta: "Puedes editar tu perfil accediendo a la sección 'Mi Perfil' desde el menú principal. Allí podrás actualizar tu información personal, foto de perfil y preferencias."
        },
        {
            id: 3,
            categoria: "Servicios",
            pregunta: "¿Cómo puedo contratar un servicio?",
            respuesta: "Para contratar un servicio, navega por las categorías disponibles, selecciona el profesional que te interese y utiliza el botón 'Solicitar Cotización' para iniciar el proceso."
        },
        {
            id: 4,
            categoria: "Servicios",
            pregunta: "¿Cómo funciona el sistema de pagos?",
            respuesta: "IWANNA ofrece múltiples métodos de pago seguros. Una vez que aceptes una cotización, podrás realizar el pago a través de tarjeta de crédito, débito o transferencia bancaria."
        },
        {
            id: 5,
            categoria: "Seguridad",
            pregunta: "¿Cómo se protege mi información?",
            respuesta: "Tu información está protegida mediante encriptación de datos y protocolos de seguridad avanzados. Nunca compartimos tus datos personales con terceros sin tu consentimiento."
        },
        {
            id: 6,
            categoria: "Seguridad",
            pregunta: "¿Qué hago si tengo un problema con un servicio?",
            respuesta: "Si experimentas algún problema, puedes reportarlo a través de la sección 'Denuncias' o contactar a nuestro equipo de soporte. Nos comprometemos a resolver cualquier inconveniente de manera rápida y efectiva."
        }
    ];

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const renderFAQItem = (item: FAQItem) => {
        const isExpanded = expandedId === item.id;

        return (
            <View key={item.id} style={styles.faqItem}>
                <TouchableOpacity 
                    style={styles.faqHeader}
                    onPress={() => toggleExpand(item.id)}
                >
                    <View style={styles.faqHeaderContent}>
                        <Text style={styles.faqQuestion}>{item.pregunta}</Text>
                        <Ionicons 
                            name={isExpanded ? "chevron-up" : "chevron-down"} 
                            size={24} 
                            color="#3B82F6" 
                        />
                    </View>
                </TouchableOpacity>
                {isExpanded && (
                    <View style={styles.faqAnswer}>
                        <Text style={styles.faqAnswerText}>{item.respuesta}</Text>
                    </View>
                )}
            </View>
        );
    };

    const categorias = Array.from(new Set(faqs.map(faq => faq.categoria)));

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView 
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.container}>
                    {/* Sección de Introducción */}
                    <View style={styles.introSection}>
                        <View style={styles.iconContainer}>
                            <Ionicons name="help-circle-outline" size={32} color="#3B82F6" />
                        </View>
                        <Text style={styles.introTitle}>Preguntas Frecuentes</Text>
                        <Text style={styles.introText}>
                            Encuentra respuestas a las preguntas más comunes sobre IWANNA
                        </Text>
                    </View>

                    {/* Sección de FAQs */}
                    <View style={styles.faqsSection}>
                        {categorias.map(categoria => (
                            <View key={categoria} style={styles.categoriaSection}>
                                <Text style={styles.categoriaTitle}>{categoria}</Text>
                                {faqs
                                    .filter(faq => faq.categoria === categoria)
                                    .map(renderFAQItem)}
                            </View>
                        ))}
                    </View>

                    {/* Sección de Contacto */}
                    <View style={styles.contactSection}>
                        <Text style={styles.contactTitle}>¿No encuentras tu respuesta?</Text>
                        <Text style={styles.contactText}>
                            Si tienes alguna otra pregunta, no dudes en contactarnos
                        </Text>
                        <TouchableOpacity style={styles.contactButton}>
                            <Ionicons name="mail-outline" size={20} color="#FFFFFF" />
                            <Text style={styles.contactButtonText}>Contactar Soporte</Text>
                        </TouchableOpacity>
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
    introSection: {
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
    introTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#1E40AF',
        marginBottom: 8,
        textAlign: 'center',
    },
    introText: {
        fontSize: 16,
        color: '#475569',
        textAlign: 'center',
        lineHeight: 24,
    },
    faqsSection: {
        marginBottom: 24,
    },
    categoriaSection: {
        marginBottom: 24,
    },
    categoriaTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1E40AF',
        marginBottom: 16,
        paddingHorizontal: 4,
    },
    faqItem: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        overflow: 'hidden',
    },
    faqHeader: {
        padding: 16,
    },
    faqHeaderContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    faqQuestion: {
        flex: 1,
        fontSize: 16,
        fontWeight: '500',
        color: '#1E293B',
        marginRight: 12,
    },
    faqAnswer: {
        padding: 16,
        paddingTop: 0,
        backgroundColor: '#F8FAFC',
    },
    faqAnswerText: {
        fontSize: 15,
        color: '#475569',
        lineHeight: 22,
    },
    contactSection: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    contactTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#1E40AF',
        marginBottom: 8,
    },
    contactText: {
        fontSize: 16,
        color: '#475569',
        textAlign: 'center',
        marginBottom: 16,
    },
    contactButton: {
        backgroundColor: '#3B82F6',
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    contactButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 8,
    },
});
