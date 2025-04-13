import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import HeaderPrincipal from '../../components/Header';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DetalleCategoriaPosts from './CategoriaDetalle/CategoriasPost';
import DetalleCategoriaTrabajadores from './CategoriaDetalle/CategoriasTrabajadores';
import { NavigationContainer, TabNavigationState } from '@react-navigation/native';


const Tab = createMaterialTopTabNavigator();

export default function DetalleCategorias(){
  return ( 
    <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>       
            <View style={{ flex: 1,}}>
                <HeaderPrincipal titulo="CATEGORIA X" bgColor="#00BCD4" />

                <Tab.Navigator
                    screenOptions={{
                    tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
                    tabBarIndicatorStyle: { backgroundColor: '#8BC34A' },
                    }}
                >
                    <Tab.Screen name="Posts" component={DetalleCategoriaPosts} />
                    <Tab.Screen name="Trabajadores" component={DetalleCategoriaTrabajadores} />
                </Tab.Navigator>
            </View>
        </NavigationContainer>
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
