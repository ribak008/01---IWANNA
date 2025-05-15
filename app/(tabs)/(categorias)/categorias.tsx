import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TextInput, SafeAreaView, Platform } from 'react-native';
import BotonCategorias from '../../../components/BotonCategorias';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Categorias() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    const categorias = [
        {
            textoBoton: "CARPINTERÍA",
            textoBotonSub: "Encuentra carpinteros profesionales",
            iconoIzquierda: "hammer",
            onPress: () => router.push('/(tabs)/(categorias)/carpinteria')
        },
        {
            textoBoton: "GASFITERÍA",
            textoBotonSub: "Encuentra gasfiteros profesionales",
            iconoIzquierda: "water",
            onPress: () => router.push('/(tabs)/(categorias)/gasfiteria')
        },
        {
            textoBoton: "AIRE ACONDICIONADO",
            textoBotonSub: "Encuentra técnicos en aire acondicionado",
            iconoIzquierda: "snow",
            onPress: () => router.push('/(tabs)/(categorias)/aire-acondicionado')
        },
        {
            textoBoton: "ELECTRODOMÉSTICOS",
            textoBotonSub: "Encuentra técnicos en electrodomésticos",
            iconoIzquierda: "tv",
            onPress: () => router.push('/(tabs)/(categorias)/electrodomesticos')
        },
        {
            textoBoton: "ELECTRICIDAD",
            textoBotonSub: "Encuentra electricistas profesionales",
            iconoIzquierda: "flash",
            onPress: () => router.push('/(tabs)/(categorias)/electricidad')
        },
        {
            textoBoton: "PINTURA",
            textoBotonSub: "Encuentra pintores profesionales",
            iconoIzquierda: "color-palette",
            onPress: () => router.push('/(tabs)/(categorias)/pintura')
        },
        {
            textoBoton: "CERRAJERÍA",
            textoBotonSub: "Encuentra cerrajeros profesionales",
            iconoIzquierda: "key",
            onPress: () => router.push('/(tabs)/(categorias)/cerrajeria')
        },
        {
            textoBoton: "JARDINERÍA",
            textoBotonSub: "Encuentra jardineros profesionales",
            iconoIzquierda: "leaf",
            onPress: () => router.push('/(tabs)/(categorias)/jardineria')
        },
        {
            textoBoton: "LIMPIEZA",
            textoBotonSub: "Encuentra servicios de limpieza",
            iconoIzquierda: "water",
            onPress: () => router.push('/(tabs)/(categorias)/limpieza')
        },
        {
            textoBoton: "MUDANZAS",
            textoBotonSub: "Encuentra servicios de mudanza",
            iconoIzquierda: "car",
            onPress: () => router.push('/(tabs)/(categorias)/mudanzas')
        }
    ];

    const filteredCategorias = categorias.filter(categoria =>
        categoria.textoBoton.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.container}>
            {/* Header fijo */}
            <View style={styles.headerContainer}>
                <Text style={styles.titulo}>Categorías</Text>
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={20} color="#64748B" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Buscar categoría..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        placeholderTextColor="#64748B"
                    />
                </View>
            </View>

            {/* Lista scrolleable */}
            <ScrollView 
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {filteredCategorias.map((categoria, index) => (
                    <BotonCategorias
                        key={index}
                        textoBoton={categoria.textoBoton}
                        colorTexto="#1E293B"
                        textoBotonSub={categoria.textoBotonSub}
                        colorTextoSub="#64748B"
                        bgColor="#FFFFFF"
                        iconoDerecha="chevron-forward"
                        colorIconoDerecha="#3B82F6"
                        colorIconoIzquierda="#3B82F6"
                        iconoIzquierda={categoria.iconoIzquierda}
                        onPress={categoria.onPress}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E2E8F0',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
            },
            android: {
                elevation: 2,
            },
        }),
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 15,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8FAFC',
        borderRadius: 10,
        paddingHorizontal: 15,
        height: 45,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#1E293B',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        padding: 20,
    },
});
