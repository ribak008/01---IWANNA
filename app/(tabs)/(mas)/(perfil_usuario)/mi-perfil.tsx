import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import HeaderPrincipal from '../../../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { RatingStars } from '../../../../components/rating-stars';
import { router } from 'expo-router';

const imgPerfil = require('../../../../assets/images/perfil.png');

export default function MiPerfil() {
  const datos = {
      tipo:"1",
      nombre: "Manuel Perez",
      profesion: "Maestro parrillera",
      edad: "20 años",
      ubicacion: "Santiago, Chile",
      descripcion: "Maestro parrillero con más de 5 años de experiencia en eventos y restaurantes. Especializado en carnes premium y técnicas de cocción tradicionales. Comprometido con la calidad y la satisfacción del cliente.",
      correo: "manuel_perez@gmail.com",
      telefono: "+56 9 3452 5252",
      estadisticas: {
        servicios: "150+",
        satisfaccion: "98%",
        experiencia: "5+"
      },
      calificacion: 4.5,
      posts: [
        { id: 1, url: 'https://picsum.photos/600/600?random=1' },
        { id: 2, url: 'https://picsum.photos/600/600?random=2' },
        { id: 3, url: 'https://picsum.photos/600/600?random=3' },
        { id: 4, url: 'https://picsum.photos/600/600?random=4' },
        { id: 5, url: 'https://picsum.photos/600/600?random=5' },
        { id: 6, url: 'https://picsum.photos/600/600?random=6' },
      ]
    }
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Sección de Perfil */}
          <View style={styles.profileHeader}>
            <Image
              source={imgPerfil}
              style={styles.profileImage}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{datos.nombre}</Text>
              <Text style={styles.profileProfession}>{datos.profesion}</Text>
              <View style={styles.ratingContainer}>
                <RatingStars rating={datos.calificacion} showValue />
              </View>
            </View>
          </View>

          {/* Botón de Editar Perfil */}
          <TouchableOpacity style={styles.editButton} onPress={() => router.push('/(perfil_usuario)/editar-perfil')}>
            <Ionicons name="create-outline" size={20} color="#fff" />
            <Text style={styles.editButtonText}>Editar Perfil</Text>
          </TouchableOpacity>

          {/* Sección de Datos Personales */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Ionicons name="person-circle-outline" size={24} color="#8BC34A" />
              <Text style={styles.sectionTitle}>Datos Personales</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Edad:</Text>
              <Text style={styles.infoValue}>{datos.edad}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Ubicación:</Text>
              <Text style={styles.infoValue}>{datos.ubicacion}</Text>
            </View>
          </View>

          {/* Sección de Descripción */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Ionicons name="document-text-outline" size={24} color="#8BC34A" />
              <Text style={styles.sectionTitle}>Sobre Mí</Text>
            </View>
            <Text style={styles.description}>
              {datos.descripcion}
            </Text>
          </View>

          {/* Sección de Contacto */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Ionicons name="call-outline" size={24} color="#8BC34A" />
              <Text style={styles.sectionTitle}>Contacto</Text>
            </View>
            <View style={styles.infoItem}>
              <Ionicons name="mail-outline" size={20} color="#666" />
              <Text style={styles.infoValue}>{datos.correo}</Text>
            </View>
            <View style={styles.infoItem}>
              <Ionicons name="call-outline" size={20} color="#666" />
              <Text style={styles.infoValue}>{datos.telefono}</Text>
            </View>
          </View>

          {/* Sección de Estadísticas */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Ionicons name="stats-chart-outline" size={24} color="#8BC34A" />
              <Text style={styles.sectionTitle}>Estadísticas</Text>
            </View>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{datos.estadisticas.servicios}</Text>
                <Text style={styles.statLabel}>Servicios</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{datos.estadisticas.satisfaccion}</Text>
                <Text style={styles.statLabel}>Satisfacción</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{datos.estadisticas.experiencia}</Text>
                <Text style={styles.statLabel}>Años Exp.</Text>
              </View>
            </View>
          </View>

          {/* POSTS */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Ionicons name="document-text-outline" size={24} color="#8BC34A" />
              <Text style={styles.sectionTitle}>Publicaciones</Text>
            </View>
            <View style={styles.postsContainer}>
            {datos.posts.map(post => (
              <TouchableOpacity key={post.id} onPress={() => console.log('Post presionado:', post.id)} style={styles.post}>
                <Image
                  source={{ uri: post.url }}
                  style={styles.postImage}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#8BC34A',
  },
  profileInfo: {
    marginLeft: 20,
    flex: 1,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  profileProfession: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  ratingContainer: {
    marginTop: 5,
  },
  section: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
    width: 100,
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8BC34A',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  postsContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignSelf: 'stretch',
  },
  post: {
    width: '32%',
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  postImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  editButton: {
    backgroundColor: '#8BC34A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,

  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
