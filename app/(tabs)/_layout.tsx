import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#8BC34A',
                tabBarInactiveTintColor: '#666666',
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                },
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopWidth: 1,
                    borderTopColor: '#ddd',
                    height: 60,
                    paddingBottom: 5,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Inicio',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <Ionicons size={24} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="(favoritos)"
                options={{
                    title: 'Favoritos',
                    tabBarIcon: ({ color, size }) => <Ionicons size={24} name="heart" color={color} />,
                }}
            />
            <Tabs.Screen
                name="(categorias)"
                options={{
                    title: 'Categorías',
                    tabBarIcon: ({ color, size }) => <Ionicons size={24} name="grid" color={color} />,
                }}
            />
            <Tabs.Screen
                name="(mas)"
                options={{
                    title: 'Más',
                    tabBarIcon: ({ color, size }) => <Ionicons size={24} name="ellipsis-horizontal" color={color} />,
                }}
            />
        </Tabs>
    );
}