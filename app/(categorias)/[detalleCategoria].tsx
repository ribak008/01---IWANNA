import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, SafeAreaView, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HeaderPrincipal from '../../components/Header';
import DetalleCategoriaPosts from './categoriaDetalle/CategoriasPost';
import DetalleCategoriaTrabajadores from './categoriaDetalle/CategoriasTrabajadores';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Tab = createMaterialTopTabNavigator();

export default function DetalleCategorias() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, '[detalleCategoria]'>>();

  const route = useRoute();
  const { categoria } = route.params as { categoria: string };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle() {
        return <HeaderPrincipal titulo={categoria} bgColor="#00BCD4" />;
      },
      
    });
  }, [navigation]);

  return ( 

        
    <SafeAreaView style={{ flex: 1 }}>

        
      <View style={{ flex: 1 }}>
        
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
            tabBarIndicatorStyle: { backgroundColor: '#8BC34A' },
            tabBarActiveTintColor: '#84AE46',
            tabBarInactiveTintColor: '#333',
            tabBarStyle: {
              backgroundColor: '#fff',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 1,
              borderBottomColor: '#ddd',
            },
          }}
        >
          
          <Tab.Screen name="Posts" component={DetalleCategoriaPosts} />
          <Tab.Screen name="Trabajadores" component={DetalleCategoriaTrabajadores} />
        </Tab.Navigator>
   
      </View>
    </SafeAreaView>
  ); 
}


const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 10,
  },
});
