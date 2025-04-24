import { Tabs } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ 
            tabBarActiveTintColor: '#84AE46',
            tabBarInactiveTintColor: '#666',
            tabBarLabelStyle: { 
                fontWeight: '600', 
                fontSize: 12,
                marginBottom: 5,
            },
            tabBarStyle: { 
                backgroundColor: '#fff', 
                elevation: 0, 
                shadowOpacity: 0, 
                borderTopWidth: 1,
                borderTopColor: '#eee',
                height: 60,
                paddingTop: 8,
                paddingBottom: 5,
            },
            tabBarIconStyle: {
                marginTop: 5,
            },
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <Ionicons size={24} name="home" color={color} />,
                }}
            />

            <Tabs.Screen
                name="(favoritos)"
                options={{
                    headerShown: false,
                    title: 'Favoritos',
                    tabBarIcon: ({ color, size }) => <Ionicons size={24} name="heart" color={color} />,
                }}
            />
            <Tabs.Screen
                name="(categorias)"
                options={{
                    headerShown: false,
                    title: 'Categorias',
                    tabBarIcon: ({ color, size }) => <Ionicons size={24} name="grid" color={color} />,
                }}
            />
            <Tabs.Screen
                name="(mas)"
                options={{
                    headerShown: false,
                    title: 'Más',
                    tabBarIcon: ({ color, size }) => <Ionicons size={24} name="menu" color={color} />,
                }}
            />
        </Tabs>
    );
}