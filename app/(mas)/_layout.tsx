import { Stack } from 'expo-router';
import HeaderPrincipal from '../../components/Header';

export default function MasLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="planes"
        options={{
          header: (props) => (
            <HeaderPrincipal titulo= "PLANES" bgColor="#00BCD4"/>
          ),
        }}
      />
       <Stack.Screen
        name="agenda"
        options={{
          header: (props) => (
            <HeaderPrincipal titulo= "AGENDA" bgColor="#00BCD4"/>
          ),
        }}
      />
       <Stack.Screen
        name="mi-perfil"
        options={{
          header: (props) => (
            <HeaderPrincipal titulo= "MI PERFIL" bgColor="#00BCD4"/>
          ),
        }}
      />
       <Stack.Screen
        name="mensajes"
        options={{
          header: (props) => (
            <HeaderPrincipal titulo= "MENSAJES" bgColor="#00BCD4"/>
          ),
        }}
      />
      <Stack.Screen
        name="preguntas-frecuentes"
        options={{
          header: (props) => (
            <HeaderPrincipal titulo= "PREGUNTAS FRECUENTES" bgColor="#00BCD4"/>
          ),
        }}
      />
      <Stack.Screen
        name="denuncias"
        options={{
          header: (props) => (
            <HeaderPrincipal titulo= "DENUNCIAS" bgColor="#00BCD4"/>
          ),
        }}
      />
      <Stack.Screen
        name="post"
        options={{
          header: (props) => (
            <HeaderPrincipal titulo= "POSTS" bgColor="#00BCD4"/>
          ),
        }}
      />
      <Stack.Screen
        name="quienes-somos"
        options={{
          header: (props) => (
            <HeaderPrincipal titulo= "QUIENES SOMOS" bgColor="#00BCD4"/>
          ),
        }}
      />
    </Stack>
  );
}