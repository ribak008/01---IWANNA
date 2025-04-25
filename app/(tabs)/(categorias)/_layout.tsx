import { Stack } from 'expo-router';
import HeaderPrincipal from '../../../components/Header';
import { Ionicons } from '@expo/vector-icons';

interface RouteParams {
  categoria?: string;
}

export default function CategoriaLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="categorias"
        options={{
          header: (props) => (
            <HeaderPrincipal titulo="CATEGORIAS" bgColor="#FFFFFF"/>
          ),
        }}
      />
      <Stack.Screen
        name="[detalleCategoria]"
        options={{
          header: (props) => (
            <HeaderPrincipal
              titulo={(props.route.params as RouteParams)?.categoria || 'Categoría'}
              bgColor="#FFFFFF"
            />
          ),
        }}
      />
    </Stack>
  );
}