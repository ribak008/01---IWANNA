
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
import BotonMensaje from '../../components/botonMensaje';
import { StyleSheet } from 'react-native';


export default function Mensajes() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>

          <View style={styles.container}>
            <BotonMensaje
              textoBoton='Juan Gana'
              textoProfesion='Maestro parrillero'
              colorTextoProfesion='#424242'      
              numeroMensaje={5}
              avatar={require('../../assets/images/perfil.png')}
              colorTexto='#8BC34A'
              bgColor='#F5F5F5'
              onPress={() => console.log('Trabajador 1')}
              />
            </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
              

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    scrollContainer: {
      paddingBottom: 20,
    },
  });