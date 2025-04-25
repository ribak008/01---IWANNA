import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, TextInput, StyleSheet, View, Text, Platform } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BotonCategorias from '../../../components/BotonCategorias';
import { useRouter } from 'expo-router';

export default function Categorias() {
  const router = useRouter();
  const [busqueda, setBusqueda] = useState('');

  const handleBuscar = (text: string) => {
    setBusqueda(text);
    console.log('Texto buscado:', text);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.titulo}>Categorías</Text>
          
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#888" style={styles.icono} />
            <TextInput
              placeholder="Buscar categoría..."
              placeholderTextColor="#888"
              value={busqueda}
              onChangeText={handleBuscar}
              style={styles.input}
            />
          </View>

          {[
            { nombre: 'CARPINTERIA', icono: 'hammer' },
            { nombre: 'ELECTRICISTA', icono: 'flash' },
            { nombre: 'PELUQUERO', icono: 'cut' },
            { nombre: 'JARDINERO', icono: 'leaf' },
            { nombre: 'GASFERIA', icono: 'flame' },
            { nombre: 'MECÁNICO', icono: 'car' },
            { nombre: 'PINTOR', icono: 'brush' },
            { nombre: 'ALBAÑIL', icono: 'construct' },
            { nombre: 'CERRAJERO', icono: 'key' },
            { nombre: 'FONTANERO', icono: 'water' },
            { nombre: 'TÉCNICO EN AIRE ACONDICIONADO', icono: 'snow' },
            { nombre: 'INSTALADOR DE PISOS', icono: 'square' },
            { nombre: 'TÉCNICO EN ELECTRODOMÉSTICOS', icono: 'tv' },
            { nombre: 'MONTADOR DE MUEBLES', icono: 'cube' }
          ].map((categoria, index) => (
            <BotonCategorias 
              textoBoton={categoria.nombre} 
              colorTexto='#8BC34A'
              bgColor='#F5F5F5' 
              iconoDerecha={"chevron-forward"} 
              colorIconoDerecha='#00BCD4'
              colorIconoIzquierda='#8BC34A'
              iconoIzquierda={categoria.icono} 
              key={index}
              onPress={() => router.push({
                pathname: '/(categorias)/[detalleCategoria]',
                params: { categoria: categoria.nombre }
              })}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    marginTop: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
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
  icono: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 16,
    color: '#333',
  },
});
