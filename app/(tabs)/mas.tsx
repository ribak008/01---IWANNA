
import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image, SafeAreaView, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, TabNavigationState } from '@react-navigation/native';
import BotonCategorias from '../../components/BotonCategorias';
import HeaderPrincipal from '../../components/Header';


const imgPerfil = require('../../assets/images/perfil.png')

function btnPerfil(){
    console.log('se apreto el boton mi perfil')
}

function handleBotton(){
    console.log('boton apretado')
}


export default function Mas() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            

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
                            onPress={() =>{btnPerfil()}}
                            title="Ver mi perfil"
                            color="#306A9C"
                            accessibilityLabel="Learn more about this purple button"
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
                    onPress={() => handleBotton()}
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
                    onPress={() => handleBotton()}
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
                    onPress={() => handleBotton()}
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
                    onPress={() => handleBotton()}
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
                    onPress={() => handleBotton()}
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
                    onPress={() => handleBotton()}
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
                    onPress={() => handleBotton()}
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
        paddingBottom: 20,
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
        
    }
  });
  