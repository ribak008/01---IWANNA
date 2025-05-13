import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import CotizacionCard from '../../../../components/card-cotizacion';

// Datos de ejemplo para las cotizaciones
const cotizaciones = [
  {
    id: '1',
    nombre: 'Juan',
    apellido: 'Pérez',
    fecha: '13/05/2025',
    motivo: 'Instalación eléctrica en departamento',
    imagen: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: '2',
    nombre: 'María',
    apellido: 'González',
    fecha: '12/05/2025',
    motivo: 'Reparación de tuberías en baño',
    imagen: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: '3',
    nombre: 'Carlos',
    apellido: 'Rodríguez',
    fecha: '11/05/2025',
    motivo: 'Pintura de interiores',
    imagen: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
];


export default function Cotizacion() {
  const router = useRouter();

  const handleCardPress = (id: string) => {
    // Navegar a la pantalla de detalle de la cotización
    router.push(`/(mas)/(cotizacion)/cotizacion-interior?id=${id}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Cotizaciones</Text>
      <ScrollView style={styles.scrollView}>
        {cotizaciones.map((cotizacion) => (
          <CotizacionCard
            key={cotizacion.id}
            {...cotizacion}
            onPress={() => handleCardPress(cotizacion.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  scrollView: {
    flex: 1,
  },

});