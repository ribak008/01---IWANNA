import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image, SafeAreaView, Button } from 'react-native';
import BotonCategorias from '../../../components/BotonCategorias';
import { useRouter } from 'expo-router';    
import { RatingStars } from '../../../components/rating-stars';

const imgPerfil = require('../../../assets/images/perfil.png')



export default function Mas() {
    const router = useRouter();
   const averageRating = 4;
    
    return (
        <SafeAreaView style={{ flex: 1,}}>
            

            <ScrollView contentContainerStyle={styles.scrollContainer}>

            <View>
                <View style={styles.seccionPerfil}>
                    <Image 
                        source={imgPerfil}
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: 80,
                            marginVertical: 20,
                            marginHorizontal: 10,
                            borderColor: '#306A9C',
                            borderWidth: 5,
                        }}
                    />
                    <View style={{alignItems: 'flex-start', justifyContent:'center', gap:'10'}}>
                        <Text style={{fontSize: 25}}>Juan Gana</Text>                       
                            <Button
                                title="Ver mi perfil"
                                color="#306A9C"
                                onPress={() => router.push('/(mas)/mi-perfil')}
                                />
                        
                    </View>
                </View>
                <View style={styles.seccionPerfil}>
                    <Text>
                        PLAN ACTUAL: FREEEEEEEEEEEE
                    </Text>
                </View>

            </View>

            <View style={styles.cuerpoBotones}>

            <View>
                <RatingStars rating={Number(averageRating)} showValue />            
            </View>
            
                <BotonCategorias 
                    textoBoton= 'MENSAJES'
                    colorTexto='#8BC34A'
                    textoBotonSub='Revisa todos tus mensajes aqui'
                    colorTextoSub=''
                    bgColor='#F5F5F5' 
                    iconoDerecha={"chevron-forward"} 
                    colorIconoDerecha='#00BCD4'
                    colorIconoIzquierda='#8BC34A'
                    iconoIzquierda={"chatbubbles"} 
                    key= '1'
                    onPress={() => router.push('/(mas)/mensajes')}
            />
                <BotonCategorias 
                    textoBoton= 'MI PLAN'
                    colorTexto='#8BC34A'
                    textoBotonSub='Administra tu plan aqui'
                    colorTextoSub=''
                    bgColor='#F5F5F5' 
                    iconoDerecha={"chevron-forward"} 
                    colorIconoDerecha='#00BCD4'
                    colorIconoIzquierda='#8BC34A'
                    iconoIzquierda={"card"} 
                    key= '2'
                    onPress={() => router.push('/(mas)/planes')}

            />
                <BotonCategorias 
                    textoBoton= 'MIS POSTS'
                    colorTexto='#8BC34A'
                    textoBotonSub='Mira, edita y crea tus post aqui'
                    colorTextoSub=''
                    bgColor='#F5F5F5' 
                    iconoDerecha={"chevron-forward"} 
                    colorIconoDerecha='#00BCD4'
                    colorIconoIzquierda='#8BC34A'
                    iconoIzquierda={"image"} 
                    key= '3'
                    onPress={() => router.push('/(mas)/post')}
            />
                <BotonCategorias 
                    textoBoton= 'MI AGENDA'
                    colorTexto='#8BC34A'
                    textoBotonSub='Revisa tu agenda de trabajo aqui'
                    colorTextoSub=''
                    bgColor='#F5F5F5' 
                    iconoDerecha={"chevron-forward"} 
                    colorIconoDerecha='#00BCD4'
                    colorIconoIzquierda='#8BC34A'
                    iconoIzquierda={"calendar"} 
                    key= '4'
                    onPress={() => router.push('/(mas)/agenda')}
            />
                <BotonCategorias 
                    textoBoton= 'QUIENES SOMOS'
                    colorTexto='#8BC34A'
                    textoBotonSub='Revisa nuestras politicas y condiciones de uso'
                    colorTextoSub=''
                    bgColor='#F5F5F5' 
                    iconoDerecha={"chevron-forward"} 
                    colorIconoDerecha='#00BCD4'
                    colorIconoIzquierda='#8BC34A'
                    iconoIzquierda={"briefcase"} 
                    key= '5'
                    onPress={() => router.push('/(mas)/quienes-somos')}
            />
                <BotonCategorias 
                    textoBoton= 'PREGUNTAS FRECUENTES'
                    colorTexto='#8BC34A'
                    textoBotonSub='Revisa tu agenda de trabajo aqui'
                    colorTextoSub=''
                    bgColor='#F5F5F5' 
                    iconoDerecha={"chevron-forward"} 
                    colorIconoDerecha='#00BCD4'
                    colorIconoIzquierda='#8BC34A'
                    iconoIzquierda={"help"} 
                    key= '6'
                    onPress={() => router.push('/(mas)/preguntas-frecuentes')}
            />
                <BotonCategorias 
                    textoBoton= 'DENUNCIAS'
                    colorTexto='#8BC34A'
                    textoBotonSub='Reporta contenidos sospechos o contenido malintencionado'
                    colorTextoSub=''
                    bgColor='#F5F5F5' 
                    iconoDerecha={"chevron-forward"} 
                    colorIconoDerecha='#00BCD4'
                    colorIconoIzquierda='#8BC34A'
                    iconoIzquierda={"eye"} 
                    key= '7'
                    onPress={() => router.push('/(mas)/denuncias')}
            />
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    seccionPlan:{
        backgroundColor: '#F9C23C',
        padding: 5,
    },
    scrollContainer: {
       
      },
    title: {
      fontSize: 22,
      textAlign: 'center',
      fontWeight: '600',
      marginBottom: 10,
    },
    seccionPerfil:{
      backgroundColor: '#F9C23C',  
      flexDirection: 'row',
    },
    cuerpoBotones:{     
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
        
    }
  });
  