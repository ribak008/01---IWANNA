import React from 'react';
import { TouchableOpacity, TouchableHighlight, Text, View, Image, StyleSheet, GestureResponderEvent } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


type Props = {
    textoBoton: string;
    colorTexto: string
    bgColor: string;
 
    onPress: (event: GestureResponderEvent) => void;
    iconoDerecha?: any;
    colorIconoDerecha?: string;
    iconoIzquierda?: any;
    colorIconoIzquierda?: string;
};

const BotonCategorias: React.FC<Props> = ({ textoBoton, colorTexto, onPress,
                                            bgColor, iconoDerecha, colorIconoDerecha, 
                                            iconoIzquierda, colorIconoIzquierda 
    }) => {
    return (

    <TouchableHighlight

    style={[styles.boton, { backgroundColor: bgColor }]}
    underlayColor={'#ddd'}
    onPress={onPress}
    >
    <View style={styles.contenidoBoton}>
        <View  style={{ flexDirection: 'row', gap:10 }}>
            <Ionicons size={20} name={iconoIzquierda} color={colorIconoIzquierda} style={{ fontWeight: '800'}}></Ionicons>
            <Text style={{ fontWeight: '800', color: colorTexto }}>{textoBoton}</Text>
        </View>
        <Ionicons name={iconoDerecha} size={20} color={colorIconoDerecha} style={styles.icono} />
    </View>
    </TouchableHighlight>
        );
    }


    const styles = StyleSheet.create({
    boton: {
        marginVertical: 10,
        // backgroundColor: '#F5F5F5',
        width: 350,
        padding: 20,
        borderRadius: 50,
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
      },
      contenidoBoton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      icono: {
        marginRight: 8,
        
      },
    });

export default BotonCategorias;    