import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image, SafeAreaView, TouchableOpacity, Platform, Button } from 'react-native';
import BotonCategorias from '../../../components/BotonCategorias';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { RatingStars } from '../../../components/rating-stars';

const imgPerfil = require('../../../assets/images/perfil.png');

export default function Mas() {
    const router = useRouter();
    const averageRating = 4;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    {/* Sección de Perfil */}
                    <View style={styles.perfilContainer}>
                        <View style={styles.perfilContent}>
                            <View style={styles.perfilImageContainer}>
                                <Image
                                    source={imgPerfil}
                                    style={styles.perfilImage}
                                />
                            </View>
                            <View style={styles.perfilInfo}>
                                <View style={styles.nombreContainer}>
                                    <Text style={styles.perfilNombre}>Manuel Perez</Text>
                                </View>
                                <View style={styles.planRatingContainer}>
                                    <View style={styles.planContainer}>
                                        <Ionicons name="star" size={14} color="#3B82F6" />
                                        <Text style={styles.perfilPlan}>Plan Free</Text>
                                    </View>
                                    <View style={styles.ratingContainer}>
                                        <RatingStars rating={Number(averageRating)} showValue />
                                    </View>
                                </View>
                                <View style={styles.botonesContainer}>
                                    <TouchableOpacity
                                        style={[styles.perfilButton, styles.perfilButtonLeft]}
                                        onPress={() => router.push('/(mas)/(perfil_usuario)')}
                                    >
                                        <Ionicons name="person" size={16} color="#3B82F6" />
                                        <Text style={styles.perfilButtonText}>Mi Perfil</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.perfilButton, styles.perfilButtonRight]}
                                        onPress={() => router.push('/(mas)/mi-perfil-cliente')}
                                    >
                                        <Ionicons name="person-circle" size={16} color="#3B82F6" />
                                        <Text style={styles.perfilButtonText}>Perfil Cliente</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.authSection}>
                            <View style={styles.authInfo}>
                                <Ionicons name="warning" size={18} color="#EF4444" />
                                <Text style={styles.authText}>No estás autenticado</Text>
                            </View>
                            <TouchableOpacity 
                                style={styles.authButton}
                                onPress={() => router.push('/(mas)/(auth2)/auth2-info')}
                            >
                                <Text style={styles.authButtonText}>Iniciar Autenticación</Text>
                                <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    
                    
                    

                    {/* Sección de Opciones */}

                    <View style={styles.opcionesContainer}>
                        <Text style={styles.seccionTitulo}>Mi Cuenta</Text>
                        <BotonCategorias
                            textoBoton="MENSAJES"
                            colorTexto="#1E293B"
                            textoBotonSub="Revisa todos tus mensajes aquí"
                            colorTextoSub="#64748B"
                            bgColor="#FFFFFF"
                            iconoDerecha="chevron-forward"
                            colorIconoDerecha="#3B82F6"
                            colorIconoIzquierda="#3B82F6"
                            iconoIzquierda="chatbubbles"
                            onPress={() => router.push('/(mas)/(mensajes)/mensajes')}
                        />
                        <BotonCategorias
                            textoBoton="MI PLAN"
                            colorTexto="#1E293B"
                            textoBotonSub="Administra tu plan aquí"
                            colorTextoSub="#64748B"
                            bgColor="#FFFFFF"
                            iconoDerecha="chevron-forward"
                            colorIconoDerecha="#3B82F6"
                            colorIconoIzquierda="#3B82F6"
                            iconoIzquierda="card"
                            onPress={() => router.push('/(mas)/mi-plan')}
                        />
                        <BotonCategorias
                            textoBoton="MIS POSTS"
                            colorTexto="#1E293B"
                            textoBotonSub="Mira, edita y crea tus posts aquí"
                            colorTextoSub="#64748B"
                            bgColor="#FFFFFF"
                            iconoDerecha="chevron-forward"
                            colorIconoDerecha="#3B82F6"
                            colorIconoIzquierda="#3B82F6"
                            iconoIzquierda="image"
                            onPress={() => router.push('/(mas)/post')}
                        />
                        <BotonCategorias
                            textoBoton="COTIZACIONES"
                            colorTexto="#1E293B"
                            textoBotonSub="Revisa tus cotizaciones entrantes aquí"
                            colorTextoSub="#64748B"
                            bgColor="#FFFFFF"
                            iconoDerecha="chevron-forward"
                            colorIconoDerecha="#3B82F6"
                            colorIconoIzquierda="#3B82F6"
                            iconoIzquierda="cart"
                            onPress={() => router.push('/(mas)/(cotizacion)/cotizacion')}
                        />
                        <BotonCategorias
                            textoBoton="MI AGENDA"
                            colorTexto="#1E293B"
                            textoBotonSub="Revisa tu agenda de trabajo aquí"
                            colorTextoSub="#64748B"
                            bgColor="#FFFFFF"
                            iconoDerecha="chevron-forward"
                            colorIconoDerecha="#3B82F6"
                            colorIconoIzquierda="#3B82F6"
                            iconoIzquierda="calendar"
                            onPress={() => router.push('/(mas)/agenda')}
                        />
                    </View>

                    {/* Sección de Información */}
                    <View style={styles.opcionesContainer}>
                        <Text style={styles.seccionTitulo}>Información</Text>
                        <BotonCategorias
                            textoBoton="QUIENES SOMOS"
                            colorTexto="#1E293B"
                            textoBotonSub="Revisa nuestras políticas y condiciones de uso"
                            colorTextoSub="#64748B"
                            bgColor="#FFFFFF"
                            iconoDerecha="chevron-forward"
                            colorIconoDerecha="#3B82F6"
                            colorIconoIzquierda="#3B82F6"
                            iconoIzquierda="briefcase"
                            onPress={() => router.push('/(mas)/quienes-somos')}
                        />
                        <BotonCategorias
                            textoBoton="PREGUNTAS FRECUENTES"
                            colorTexto="#1E293B"
                            textoBotonSub="Encuentra respuestas a tus dudas"
                            colorTextoSub="#64748B"
                            bgColor="#FFFFFF"
                            iconoDerecha="chevron-forward"
                            colorIconoDerecha="#3B82F6"
                            colorIconoIzquierda="#3B82F6"
                            iconoIzquierda="help"
                            onPress={() => router.push('/(mas)/preguntas-frecuentes')}
                        />
                        <BotonCategorias
                            textoBoton="DENUNCIAS"
                            colorTexto="#1E293B"
                            textoBotonSub="Reporta contenidos sospechosos o malintencionados"
                            colorTextoSub="#64748B"
                            bgColor="#FFFFFF"
                            iconoDerecha="chevron-forward"
                            colorIconoDerecha="#3B82F6"
                            colorIconoIzquierda="#3B82F6"
                            iconoIzquierda="eye"
                            onPress={() => router.push('/(mas)/denuncias')}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        paddingBottom: 30,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    perfilContainer: {
        padding: 16,
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    perfilContent: {
        backgroundColor: '#F8FAFC',
        borderRadius: 16,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    perfilImageContainer: {
        alignItems: 'center',
        marginRight: 16,
        width: 80,
    },
    perfilImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#3B82F6',
    },
    perfilInfo: {
        flex: 1,
        justifyContent: 'space-between',
        height: 85,
    },
    nombreContainer: {
        marginBottom: 4,
    },
    perfilNombre: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1E293B',
    },
    planRatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        gap: 8,
    },
    planContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EFF6FF',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 16,
    },
    perfilPlan: {
        fontSize: 12,
        fontWeight: '600',
        color: '#3B82F6',
        marginLeft: 4,
    },
    ratingContainer: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 4,
        paddingVertical: 1,
        borderRadius: 8,
        transform: [{ scale: 0.8 }],
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
            },
            android: {
                elevation: 2,
            },
        }),
    },
    botonesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 6,
        marginTop: 4,
    },
    perfilButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    perfilButtonLeft: {
        marginRight: 3,
    },
    perfilButtonRight: {
        marginLeft: 3,
    },
    perfilButtonText: {
        color: '#3B82F6',
        fontWeight: '600',
        marginLeft: 4,
        fontSize: 12,
    },
    authSection: {
        marginTop: 16,
        backgroundColor: '#FEF2F2',
        borderRadius: 12,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    authInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        flex: 1,
    },
    authText: {
        color: '#EF4444',
        fontWeight: '600',
        fontSize: 13,
    },
    authButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EF4444',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
        gap: 6,
    },
    authButtonText: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 13,
    },
    opcionesContainer: {
        padding: 20,
        marginTop: 20,
    },
    seccionTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
        marginLeft: 5,
    },
});
