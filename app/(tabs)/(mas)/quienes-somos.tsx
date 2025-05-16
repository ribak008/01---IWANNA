import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function QuienesSomos() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView 
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.container}>
                    {/* Sección Hero */}
                    <View style={styles.heroSection}>
                        <LinearGradient
                            colors={['#EFF6FF', '#DBEAFE']}
                            style={styles.heroGradient}
                        >
                            <Image
                                source={require('../../../assets/images/icons/logo-nuevo.png')}
                                style={styles.logo}
                                resizeMode="contain"
                            />
                            <Text style={styles.heroSubtitle}>Conectando talentos con oportunidades</Text>
                        </LinearGradient>
                    </View>

                    {/* Sección Misión */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <View style={styles.iconContainer}>
                                <Ionicons name="rocket-outline" size={24} color="#3B82F6" />
                            </View>
                            <Text style={styles.sectionTitle}>Nuestra Misión</Text>
                        </View>
                        <Text style={styles.sectionText}>
                            En IWANNA, nos dedicamos a conectar profesionales talentosos con personas que necesitan sus servicios, creando una comunidad donde la excelencia y la confianza son nuestros pilares fundamentales.
                        </Text>
                    </View>

                    {/* Sección Valores */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <View style={styles.iconContainer}>
                                <Ionicons name="heart-outline" size={24} color="#3B82F6" />
                            </View>
                            <Text style={styles.sectionTitle}>Nuestros Valores</Text>
                        </View>
                        <View style={styles.valuesContainer}>
                            <View style={styles.valueItem}>
                                <View style={styles.valueIconContainer}>
                                    <Ionicons name="shield-checkmark-outline" size={24} color="#3B82F6" />
                                </View>
                                <Text style={styles.valueTitle}>Confianza</Text>
                                <Text style={styles.valueText}>Verificación rigurosa de todos nuestros profesionales</Text>
                            </View>
                            <View style={styles.valueItem}>
                                <View style={styles.valueIconContainer}>
                                    <Ionicons name="star-outline" size={24} color="#3B82F6" />
                                </View>
                                <Text style={styles.valueTitle}>Excelencia</Text>
                                <Text style={styles.valueText}>Compromiso con la calidad en cada servicio</Text>
                            </View>
                            <View style={styles.valueItem}>
                                <View style={styles.valueIconContainer}>
                                    <Ionicons name="people-outline" size={24} color="#3B82F6" />
                                </View>
                                <Text style={styles.valueTitle}>Comunidad</Text>
                                <Text style={styles.valueText}>Construyendo una red de profesionales confiables</Text>
                            </View>
                        </View>
                    </View>

                    {/* Sección Compromiso */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <View style={styles.iconContainer}>
                                <Ionicons name="hand-left-outline" size={24} color="#3B82F6" />
                            </View>
                            <Text style={styles.sectionTitle}>Nuestro Compromiso</Text>
                        </View>
                        <Text style={styles.sectionText}>
                            Nos comprometemos a proporcionar una plataforma segura y confiable donde cada interacción esté respaldada por nuestro sistema de verificación y garantía de calidad.
                        </Text>
                    </View>

                    {/* Sección Contacto */}
                    <View style={styles.contactSection}>
                        <Text style={styles.contactTitle}>¿Tienes alguna pregunta?</Text>
                        <Text style={styles.contactText}>
                            Estamos aquí para ayudarte. Contáctanos a través de:
                        </Text>
                        <View style={styles.contactInfo}>
                            <Ionicons name="mail-outline" size={20} color="#3B82F6" />
                            <Text style={styles.contactEmail}>soporte@iwanna.com</Text>
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
        backgroundColor: '#FFFFFF',
    },
    scrollView: {
        flex: 1,
    },
    scrollContainer: {
        paddingBottom: 40,
    },
    container: {
        flex: 1,
    },
    heroSection: {
        height: 250,
        marginBottom: 24,
    },
    heroGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 180,
        height: 180,
        marginBottom: 16,
    },
    heroSubtitle: {
        fontSize: 16,
        color: '#3B82F6',
        textAlign: 'center',
    },
    section: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 16,
        marginBottom: 24,
        borderRadius: 16,
        padding: 20,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#EFF6FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#1E40AF',
        marginLeft: 12,
    },
    sectionText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#475569',
    },
    valuesContainer: {
        marginTop: 16,
    },
    valueItem: {
        marginBottom: 24,
    },
    valueIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#EFF6FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    valueTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1E40AF',
        marginBottom: 8,
    },
    valueText: {
        fontSize: 14,
        lineHeight: 20,
        color: '#64748B',
    },
    contactSection: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 16,
        marginBottom: 24,
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
        color: '#64748B',
        textAlign: 'center',
        marginBottom: 16,
    },
    contactInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EFF6FF',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
    },
    contactEmail: {
        fontSize: 16,
        color: '#3B82F6',
        marginLeft: 8,
    },
});