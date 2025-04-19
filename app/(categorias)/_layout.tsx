import { Stack } from 'expo-router';
import HeaderPrincipal from '../../components/Header';
import { Ionicons } from '@expo/vector-icons';

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
          headerRight: () => (
            <Ionicons
              name="search"
              size={24}
              color="#00BCD4"
              style={{ marginRight: 10 }}
            />
          ),
        }}
      />
    </Stack>
  );
}