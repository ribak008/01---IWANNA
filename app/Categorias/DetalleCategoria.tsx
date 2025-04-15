import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HeaderPrincipal from '../../components/Header';
import DetalleCategoriaPosts from './CategoriaDetalle/CategoriasPost';
import DetalleCategoriaTrabajadores from './CategoriaDetalle/CategoriasTrabajadores';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Tab = createMaterialTopTabNavigator();

export default function DetalleCategorias() {
  const navigation = useNavigation();

  const route = useRoute();
  const { categoria } = route.params as { categoria: string };

  useLayoutEffect(() => {

    navigation.setOptions({
      
          
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="#00BCD4" />
        </TouchableOpacity>
      ),
      header() {
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
