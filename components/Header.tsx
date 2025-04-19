import React from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet, GestureResponderEvent } from 'react-native';
import { AnimatedImage } from 'react-native-reanimated/lib/typescript/component/Image';

type Props = {
    titulo?: string;
    bgColor?: string;
};

const imgLogo = require('../assets/images/icons/logo-sin-fondo.png');

const HeaderPrincipal: React.FC<Props> = ({ titulo, bgColor }) => {
    return (

    <View style={styles.fixedHeader}>
    <Image source={imgLogo} style={{ width: 80, height: 80 }} />
    {titulo && (
      <Text style={[styles.titulo, { backgroundColor: bgColor }]}>{titulo} </Text>    
    )}
      </View>
    );
}

const styles = StyleSheet.create({
  fixedHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#fff',
    height: 'auto',
  },
  titulo: {
    fontSize: 20,
    // backgroundColor: '#00BCD4',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 40,
    color: '#F5F5F5',
  },
});

export default HeaderPrincipal;