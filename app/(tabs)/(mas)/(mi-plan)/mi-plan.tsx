import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function MiPlan() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <LinearGradient
                    colors={['#2563EB', '#1E40AF']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.cardHeader}
                >
                    <View style={styles.planInfo}>
                        <Text style={styles.planName}>Plan Premium</Text>
                        <Text style={styles.planStatus}>Activo</Text>
                    </View>
                    <View style={styles.planIcon}>
                        <Ionicons name="diamond" size={32} color="#FFFFFF" />
                    </View>
                </LinearGradient>
                
                <View style={styles.advantages}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.currency}>$</Text>
                        <Text style={styles.price}>19.990</Text>
                        <Text style={styles.period}>/mes</Text>
                    </View>
                    
                    <View style={styles.featuresList}>
                        <View style={styles.featureItem}>
                            <Ionicons name="checkmark-circle" size={20} color="#2563EB" />
                            <Text style={styles.featureText}>Acceso a contenido premium</Text>
                        </View>
                        <View style={styles.featureItem}>
                            <Ionicons name="checkmark-circle" size={20} color="#2563EB" />
                            <Text style={styles.featureText}>Sin anuncios</Text>
                        </View>
                        <View style={styles.featureItem}>
                            <Ionicons name="checkmark-circle" size={20} color="#2563EB" />
                            <Text style={styles.featureText}>Soporte 24/7</Text>
                        </View>
                        <View style={styles.featureItem}>
                            <Ionicons name="checkmark-circle" size={20} color="#2563EB" />
                            <Text style={styles.featureText}>Acceso anticipado a nuevas funciones</Text>
                        </View>
                    </View>
                </View>
            </View>

            <TouchableOpacity 
                style={styles.button}
                onPress={() => router.push('/(mas)/(mi-plan)/planes')}
            >
                <Text style={styles.buttonText}>Cambiar de plan</Text>
                <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#F8FAFC',
        flex: 1
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 12,
            },
            android: {
                elevation: 8,
            },
        }),
    },
    cardHeader: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    planInfo: {
        flex: 1,
    },
    planName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 4,
    },
    planStatus: {
        fontSize: 14,
        color: '#E2E8F0',
        fontWeight: '500',
    },
    planIcon: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    advantages: {
        padding: 20,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 24,
    },
    currency: {
        fontSize: 20,
        fontWeight: '600',
        color: '#1E293B',
        marginRight: 4,
    },
    price: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#1E293B',
    },
    period: {
        fontSize: 16,
        color: '#64748B',
        marginLeft: 4,
    },
    featuresList: {
        gap: 16,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    featureText: {
        fontSize: 16,
        color: '#1E293B',
        flex: 1,
    },
    button: {
        backgroundColor: '#2563EB',
        padding: 16,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
        gap: 8,
        ...Platform.select({
            ios: {
                shadowColor: '#2563EB',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});