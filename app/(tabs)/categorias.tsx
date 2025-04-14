import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, TextInput, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import HeaderPrincipal from '../../components/Header';
import BotonCategorias from '../../components/BotonCategorias';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function Categorias() {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

    
    const [busqueda, setBusqueda] = useState('');
    const handleBuscar = (text: string) => {
        setBusqueda(text);
        console.log('Texto buscado:', text);
    };
    const handleBotton = (categoria: any) => {
        console.log('boton apretado:'+ categoria);
    };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>

          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#888" style={styles.icono} />
            <TextInput
              placeholder="Buscar..."
              value={busqueda}
              onChangeText={handleBuscar}
              style={styles.input}
            />
          </View>

          {['CATEGORÍA 1', 'CATEGORÍA 2', 'CATEGORÍA 3'].map((categoria, index) => (

            <BotonCategorias 
            textoBoton={categoria} 
            colorTexto='#8BC34A'
            bgColor='#F5F5F5' 
            iconoDerecha={"chevron-forward"} 
            colorIconoDerecha='#00BCD4'
            colorIconoIzquierda='#8BC34A'
            iconoIzquierda={"hammer"} 
            key={index}
            onPress={() => navigation.navigate('Categorias/DetalleCategoria', { categoria: categoria})}
            
           />
          ))}

          <StatusBar style="auto" />
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
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    margin: 10,
    elevation: 2,
  },
  icono: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
   
  },
});
