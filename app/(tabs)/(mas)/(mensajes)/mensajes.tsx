import { Text, View, StyleSheet, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import BotonMensaje from '../../../../components/botonMensaje';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Mensajes() {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView 
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.container}>
                    <View style={styles.searchContainer}>
                        <View style={styles.searchBar}>
                            <Ionicons name="search" size={20} color="#64748B" />
                            <Text style={styles.searchText}>Buscar conversaciones</Text>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Conversaciones Recientes</Text>
                            <TouchableOpacity>
                                <Text style={styles.sectionAction}>Ver todas</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.messagesContainer}>
                            <BotonMensaje
                                textoBoton='Juan Gana'
                                textoProfesion='Maestro parrillero'
                                colorTextoProfesion='#64748B'      
                                numeroMensaje={5}
                                avatar={require('../../../../assets/images/perfil.png')}
                                colorTexto='#1E293B'
                                bgColor='#FFFFFF'
                                onPress={() => router.push('/(mas)/(mensajes)/chat')}
                            />
                            <BotonMensaje
                                textoBoton='María López'
                                textoProfesion='Diseñadora de interiores'
                                colorTextoProfesion='#64748B'      
                                numeroMensaje={2}
                                avatar={require('../../../../assets/images/perfil.png')}
                                colorTexto='#1E293B'
                                bgColor='#FFFFFF'
                                onPress={() => router.push('/(mas)/(mensajes)/chat')}
                            />
                        </View>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Mensajes No Leídos</Text>
                            <TouchableOpacity>
                                <Text style={styles.sectionAction}>Marcar todos</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.messagesContainer}>
                            <BotonMensaje
                                textoBoton='Carlos Ruiz'
                                textoProfesion='Electricista'
                                colorTextoProfesion='#64748B'      
                                numeroMensaje={1}
                                avatar={require('../../../../assets/images/perfil.png')}
                                colorTexto='#1E293B'
                                bgColor='#FFFFFF'
                                onPress={() => router.push('/(mas)/(mensajes)/chat')}
                            />
                        </View>
                    </View>

                    <View style={styles.emptyState}>
                        <LinearGradient
                            colors={['#F1F5F9', '#E2E8F0']}
                            style={styles.emptyStateGradient}
                        >
                            <Ionicons name="chatbubbles-outline" size={48} color="#94A3B8" />
                            <Text style={styles.emptyStateText}>No hay más mensajes</Text>
                            <Text style={styles.emptyStateSubtext}>Tus conversaciones aparecerán aquí</Text>
                        </LinearGradient>
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
        paddingBottom: 20,
    },
    container: {
        flex: 1,
        padding: 20,
    },
    searchContainer: {
        marginBottom: 24,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 4,
            },
            android: {
                elevation: 2,
            },
        }),
    },
    searchText: {
        marginLeft: 8,
        fontSize: 15,
        color: '#94A3B8',
    },
    section: {
        marginBottom: 24,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        paddingHorizontal: 4,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1E293B',
    },
    sectionAction: {
        fontSize: 14,
        color: '#3B82F6',
        fontWeight: '600',
    },
    messagesContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        overflow: 'hidden',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 4,
            },
            android: {
                elevation: 2,
            },
        }),
    },
    emptyState: {
        marginTop: 20,
    },
    emptyStateGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    emptyStateText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#64748B',
        marginTop: 12,
    },
    emptyStateSubtext: {
        fontSize: 14,
        color: '#94A3B8',
        marginTop: 4,
    },
});