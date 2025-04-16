import { Stack } from 'expo-router';
import HeaderPrincipal from '../../components/Header';

export default function CategoriaLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[detalleCategoria]"
        options={{
          header: (props) => (
            <HeaderPrincipal
              titulo={props.route.params?.categoria || 'Categoría'}
              bgColor="#00BCD4"
            />
          ),
        }}
      />
    </Stack>
  );
}