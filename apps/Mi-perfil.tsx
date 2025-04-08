import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native';

const imgPerfil = require('../assets/images/perfil.png') ;
const imgLogo = require('../assets/images/icons/logo.jpg');


export default function MiPerfil() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* logo */}
      <View style={styles.fixedHeader}>
        <Image source={imgLogo} style={{ width: 100, height: 100 }} />
        <Text style={styles.titulo}>MI PERFIL</Text>
      </View>

      {/* seccion de scroll */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* <Text style={styles.titulo}>MI PERFIL</Text> */}
        </View>

        <View style={styles.container}>
          <Image
            source={imgPerfil}
            style={{
              width: 160,
              height: 160,
              borderRadius: 80,
              marginTop: 20,
              borderColor: '#00BCD4',
              borderWidth: 5,
            }}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.info}>
            <Text style={{ fontWeight: '800' }}>Datos personales:</Text>
            <Text>Nombre: Juan Gana</Text>
            <Text>Edad: 20 años</Text>
            <Text>Profesión: Maestro parrillero</Text>
          </View>

          <View style={styles.info}>
            <Text style={{ fontWeight: '800' }}>Descripción:</Text>
            <Text>
              Simplemente el texto de relleno de las imprentas y archivos de texto.
              Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde
              el año 1500...
            </Text>
          </View>

          <View style={styles.info}>
            <Text style={{ fontWeight: '800' }}>Datos de contacto:</Text>
            <Text>Correo: juan_siempre_gana@gmail.com</Text>
            <Text>Fono: 345252525</Text>
          </View>

          <View style={styles.info}>
            <Text style={{ fontWeight: '800' }}>Mis publicaciones:</Text>
            
          </View>
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fixedHeader: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff', 

  },
  scrollContainer: {
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo:{
    fontSize: 20,
    backgroundColor: '#00BCD4',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 40,
    color: '#F5F5F5',
  },

  info:{
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#F5F5F5',
    width: 350,
    padding: 20,
    borderRadius: 20,
    color: '#000000',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
  
    
  }

});
