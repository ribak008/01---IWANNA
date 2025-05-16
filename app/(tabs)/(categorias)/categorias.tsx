import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, SafeAreaView, TextInput, TouchableOpacity, Platform } from 'react-native';
import BotonCategorias from '../../../components/BotonCategorias';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Categorias() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    const categorias = [
        {
            textoBoton: "CARPINTERÍA",
            colorTexto: "#1E293B",
            textoBotonSub: "Encuentra carpinteros profesionales",
            colorTextoSub: "#64748B",
            bgColor: "#FFFFFF",
            iconoDerecha: "chevron-forward",
            colorIconoDerecha: "#3B82F6",
            colorIconoIzquierda: "#3B82F6",
            iconoIzquierda: "hammer",
            onPress: () => router.push('/(categorias)/carpinteria')
        },
        {
            textoBoton: "GASFITERÍA",
            colorTexto: "#1E293B",
            textoBotonSub: "Encuentra gasfiteros profesionales",
            colorTextoSub: "#64748B",
            bgColor: "#FFFFFF",
            iconoDerecha: "chevron-forward",
            colorIconoDerecha: "#3B82F6",
            colorIconoIzquierda: "#3B82F6",
            iconoIzquierda: "water",
            onPress: () => router.push('/(categorias)/gasfiteria')
        },
        {
            textoBoton: "AIRE ACONDICIONADO",
            colorTexto: "#1E293B",
            textoBotonSub: "Encuentra técnicos en aire acondicionado",
            colorTextoSub: "#64748B",
            bgColor: "#FFFFFF",
            iconoDerecha: "chevron-forward",
            colorIconoDerecha: "#3B82F6",
            colorIconoIzquierda: "#3B82F6",
            iconoIzquierda: "snow",
            onPress: () => router.push('/(categorias)/aire-acondicionado')
        },
        {
            textoBoton: "ELECTRODOMÉSTICOS",
            colorTexto: "#1E293B",
            textoBotonSub: "Encuentra técnicos en electrodomésticos",
            colorTextoSub: "#64748B",
            bgColor: "#FFFFFF",
            iconoDerecha: "chevron-forward",
            colorIconoDerecha: "#3B82F6",
            colorIconoIzquierda: "#3B82F6",
            iconoIzquierda: "tv",
            onPress: () => router.push('/(categorias)/electrodomesticos')
        },
        {
            textoBoton: "ELECTRICIDAD",
            colorTexto: "#1E293B",
            textoBotonSub: "Encuentra electricistas profesionales",
            colorTextoSub: "#64748B",
            bgColor: "#FFFFFF",
            iconoDerecha: "chevron-forward",
            colorIconoDerecha: "#3B82F6",
            colorIconoIzquierda: "#3B82F6",
            iconoIzquierda: "flash",
            onPress: () => router.push('/(categorias)/electricidad')
        },
        {
            textoBoton: "PINTURA",
            colorTexto: "#1E293B",
            textoBotonSub: "Encuentra pintores profesionales",
            colorTextoSub: "#64748B",
            bgColor: "#FFFFFF",
            iconoDerecha: "chevron-forward",
            colorIconoDerecha: "#3B82F6",
            colorIconoIzquierda: "#3B82F6",
            iconoIzquierda: "color-palette",
            onPress: () => router.push('/(categorias)/pintura')
        },
        {
            textoBoton: "JARDINERÍA",
            colorTexto: "#1E293B",
            textoBotonSub: "Encuentra jardineros profesionales",
            colorTextoSub: "#64748B",
            bgColor: "#FFFFFF",
            iconoDerecha: "chevron-forward",
            colorIconoDerecha: "#3B82F6",
            colorIconoIzquierda: "#3B82F6",
            iconoIzquierda: "leaf",
            onPress: () => router.push('/(categorias)/jardineria')
        },
        {
            textoBoton: "LIMPIEZA",
            colorTexto: "#1E293B",
            textoBotonSub: "Encuentra servicios de limpieza",
            colorTextoSub: "#64748B",
            bgColor: "#FFFFFF",
            iconoDerecha: "chevron-forward",
            colorIconoDerecha: "#3B82F6",
            colorIconoIzquierda: "#3B82F6",
            iconoIzquierda: "water",
            onPress: () => router.push('/(categorias)/limpieza')
        },
        {
            textoBoton: "CERRAJERÍA",
            colorTexto: "#1E293B",
            textoBotonSub: "Encuentra cerrajeros profesionales",
            colorTextoSub: "#64748B",
            bgColor: "#FFFFFF",
            iconoDerecha: "chevron-forward",
            colorIconoDerecha: "#3B82F6",
            colorIconoIzquierda: "#3B82F6",
            iconoIzquierda: "key",
            onPress: () => router.push('/(categorias)/cerrajeria')
        },
        {
            textoBoton: "ALBAÑILERÍA",
            colorTexto: "#1E293B",
            textoBotonSub: "Encuentra albañiles profesionales",
            colorTextoSub: "#64748B",
            bgColor: "#FFFFFF",
            iconoDerecha: "chevron-forward",
            colorIconoDerecha: "#3B82F6",
            colorIconoIzquierda: "#3B82F6",
            iconoIzquierda: "construct",
            onPress: () => router.push('/(categorias)/albanileria')
        }
    ];

    const filteredCategorias = categorias.filter(categoria =>
        categoria.textoBoton.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.container}>
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
                    {searchQuery.length > 0 && (
                        <TouchableOpacity onPress={() => setSearchQuery('')}>
                            <Ionicons name="close-circle" size={20} color="#64748B" />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
            <ScrollView 
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {filteredCategorias.map((categoria, index) => (
                    <BotonCategorias
                        key={index}
                        {...categoria}
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
        paddingBottom: 10,
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
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#1E293B',
        padding: 0,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        padding: 20,
    },
});
