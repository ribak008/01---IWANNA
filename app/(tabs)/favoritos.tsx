import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import HeaderPrincipal from '../../components/Header';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FavoritosPost from '../Favoritos/FavoritosPost';
import FavoritosTrabajador from '../Favoritos/FavoritosTrabajador';
import { NavigationContainer, NavigationIndependentTree, TabNavigationState } from '@react-navigation/native';


const Tab = createMaterialTopTabNavigator();

export default function Favoritos(){
  return ( 
    <SafeAreaView style={{ flex: 1 }}>
        <NavigationIndependentTree>       
            <View style={{ flex: 1,}}>
           

                <Tab.Navigator
                    screenOptions={{
                    tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
                    tabBarIndicatorStyle: { backgroundColor: '#8BC34A' },
                    }}
                >
                    <Tab.Screen name="Posts" component={FavoritosPost} />
                    <Tab.Screen name="Trabajadores" component={FavoritosTrabajador} />
                </Tab.Navigator>
            </View>
        </NavigationIndependentTree>
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
