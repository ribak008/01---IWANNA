import { Stack } from 'expo-router';
import HeaderPrincipal from '../../../components/Header';

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
        name="(mi-plan)"
        options={{ headerShown: false }}
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
        name="mi-perfil"
        options={{
          header: (props) => (
            <HeaderPrincipal titulo="MI PERFIL" bgColor="#FFFFFF"/>
          ),
        }}
      />
       <Stack.Screen
        name="(mensajes)"
        options={{ headerShown: false }}
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