import { Stack } from 'expo-router';
import HeaderPrincipal from '../../../components/Header';

export default function InicioLayout() {
  
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: (props) => (
            <HeaderPrincipal titulo= "INICIO" bgColor="#FFFFFF"/>
          ),
        }}
      />
      <Stack.Screen
        name="[idUsuario]"
        options={{
          header: (props) => (
            <HeaderPrincipal titulo= "PERFIL DE UN WN" bgColor="#FFFFFF"/>
          ),
        }}
      />
    </Stack>
  );
}
