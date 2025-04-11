// App.tsx o donde inicias la navegación

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Importa tus pantallas
import HomeScreen from './(tabs)/home';
import FavoritosScreen from './(tabs)/favoritos';
import CategoriasScreen from './(tabs)/categorias';
import MasScreen from './(tabs)/mas';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName = '';

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Favoritos') {
              iconName = 'heart-outline';
            } else if (route.name === 'Categorías') {
              iconName = 'grid-outline';
            } else if (route.name === 'Más') {
              iconName = 'menu-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favoritos" component={FavoritosScreen} />
        <Tab.Screen name="Categorías" component={CategoriasScreen} />
        <Tab.Screen name="Más" component={MasScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
