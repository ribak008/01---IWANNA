import React from 'react';
import { TouchableOpacity, TouchableHighlight, Text, View, Image, StyleSheet, GestureResponderEvent } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


type Props = {
    textoBoton?: string;
    colorTexto?: string;
    textoBotonSub?: string;
    colorTextoSub?: string;
    bgColor?: string;
    onPress: (event: GestureResponderEvent) => void;
    iconoDerecha?: any;
    colorIconoDerecha?: string;
    iconoIzquierda?: any;
    colorIconoIzquierda?: string;
};

const BotonCategorias: React.FC<Props> = ({ 
  textoBoton, colorTexto, onPress,
  bgColor, iconoDerecha, colorIconoDerecha, 
  iconoIzquierda, colorIconoIzquierda, colorTextoSub, textoBotonSub,
    }) => {
    return (

    <TouchableHighlight

    style={[styles.boton, { backgroundColor: bgColor }]}
    underlayColor={'#ddd'}
    onPress={onPress}
    >
    <View style={styles.contenidoBoton}>
        <View  style={{ flexDirection: 'row', gap:8 }}>
            <Ionicons style={{alignSelf: 'center', display: 'flex', fontWeight: '800'  }} size={30} name={iconoIzquierda} color={colorIconoIzquierda}></Ionicons>
            
            <View style={{gap: 2, justifyContent: 'center', maxWidth: '75%'}}>            
            <Text style={{  fontWeight: '800', color: colorTexto }}>{textoBoton}</Text>
            {textoBotonSub &&(
              <Text style={{ 
                fontWeight: '400', 
                color: colorTextoSub, 
                flexWrap: 'wrap',
                overflow: 'hidden',
                width: '80%', 
              }}>{textoBotonSub}</Text>
            )}
            
            </View>
            
        </View>
        <Ionicons name={iconoDerecha} size={30} color={colorIconoDerecha} style={[styles.icono, {alignSelf: 'center', display: 'flex', fontWeight: '800'}  ]} />
    </View>
    </TouchableHighlight>
        );
    }


    const styles = StyleSheet.create({
    boton: {
      justifyContent: 'center',      
      marginVertical: 10,
      width: '100%',
      padding: 20,
      borderRadius: 50,
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
      },
    contenidoBoton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
      alignItems: 'center',
    },
    icono: {
      marginRight: 8,      
      },
    });

export default BotonCategorias;    