import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import HeaderPrincipal from '../../components/Header';
import { TouchableOpacity } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ 
            tabBarActiveTintColor: '#84AE46',
            tabBarLabelStyle: { fontWeight: 'bold', fontSize: 12 },
            tabBarStyle: { backgroundColor: '#fff', 
                elevation: 0, 
                shadowOpacity: 0, 
                borderTopWidth: 1, 
                
            },
            
              
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    header() {
                        return <HeaderPrincipal/>;
                    },
                      
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="favoritos"
                options={{
                    title: 'Favoritos',
                    header() {
                        return <HeaderPrincipal titulo="FAVORITOS" bgColor="#00BCD4" />;
                    },
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="heart" color={color} />,
                }}
            />
            <Tabs.Screen
                name="categorias"
                options={{
                    title: 'Categorias',                    
                    header() {
                        return <HeaderPrincipal titulo="CATEGORIAS" bgColor="#00BCD4" />;
                    },
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="list" color={color} />,
                }}
            />
            
            <Tabs.Screen
                name="mas"
                options={{
                    title: 'Mas',
                    header() {
                        return <HeaderPrincipal />;
                    },
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="ellipsis-h" color={color} />,
                }}
            />           
        </Tabs>
    );
}