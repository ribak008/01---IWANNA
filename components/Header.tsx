import React from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet, GestureResponderEvent } from 'react-native';

type Props = {
    titulo?: string;
    bgColor?: string;
};

const imgLogo = require('../assets/images/icons/logo.jpg');

const HeaderPrincipal: React.FC<Props> = ({ titulo, bgColor }) => {
    return (

    <View style={styles.fixedHeader}>
    <Image source={imgLogo} style={{ width: 100, height: 100 }} />
    <Text style={[styles.titulo, { backgroundColor: bgColor }]}>{titulo} </Text>
    </View>
    );
}

const styles = StyleSheet.create({
  fixedHeader: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
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