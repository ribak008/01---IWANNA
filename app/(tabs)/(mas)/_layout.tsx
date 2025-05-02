import { Stack } from 'expo-router';
import HeaderPrincipal from '../../../components/Header';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function MasLayout() {
  
  return (
    <Stack>
      <Stack.Screen
        name="mas"
        options={{
          header: (props) => (
            <HeaderPrincipal titulo="MÁS" bgColor="#FFFFFF"/>
          ),
        }}
      />

      <Stack.Screen
        name="planes"
        options={{
          header: (props) => (
            <HeaderPrincipal titulo="PLANES" bgColor="#FFFFFF"/>
          ),
        }}
      />
       <Stack.Screen
        name="agenda"
        options={{
          header: (props) => (
            <HeaderPrincipal titulo="AGENDA" bgColor="#FFFFFF"/>
          ),
        }}
      />
       <Stack.Screen
        name="(perfil_usuario)"
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="mensajes"
        options={{
          header: (props) => (
            <HeaderPrincipal titulo="MENSAJES" bgColor="#FFFFFF"/>
          ),
        }}
      />
      <Stack.Screen
        name="preguntas-frecuentes"
        options={{
          header: (props) => (
            <HeaderPrincipal titulo="PREGUNTAS FRECUENTES" bgColor="#FFFFFF"/>
          ),
        }}
      />
      <Stack.Screen
        name="denuncias"
        options={{
          header: (props) => (
            <HeaderPrincipal titulo="DENUNCIAS" bgColor="#FFFFFF"/>
          ),
        }}
      />
      <Stack.Screen
        name="post"
        options={{
          header: (props) => (
            <HeaderPrincipal titulo="POSTS" bgColor="#FFFFFF"/>
          ),
        }}
      />
      <Stack.Screen
        name="quienes-somos"
        options={{
          header: (props) => (
            <HeaderPrincipal titulo="QUIENES SOMOS" bgColor="#FFFFFF"/>
          ),
        }}
      />
    </Stack>
  );
}