import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Surface, Text, useTheme, TouchableRipple } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

type Props = {
    textoBoton?: string;
    colorTexto?: string;
    textoBotonSub?: string;
    colorTextoSub?: string;
    bgColor?: string;
    onPress: () => void;
    iconoDerecha?: any;
    colorIconoDerecha?: string;
    iconoIzquierda?: any;
    colorIconoIzquierda?: string;
};

const BotonCategorias: React.FC<Props> = ({ 
    textoBoton, 
    colorTexto, 
    onPress,
    bgColor, 
    iconoDerecha, 
    colorIconoDerecha, 
    iconoIzquierda, 
    colorIconoIzquierda, 
    colorTextoSub, 
    textoBotonSub,
}) => {
    const theme = useTheme();

    return (
        <TouchableRipple
            onPress={onPress}
            style={styles.touchable}
            rippleColor="rgba(0, 0, 0, 0.1)"
        >
            <Surface
                style={[
                    styles.container,
                    { backgroundColor: bgColor || theme.colors.surface }
                ]}
                elevation={3}
            >
                <View style={[styles.iconContainer, { backgroundColor: `${colorIconoIzquierda}15` }]}>
                    <Ionicons 
                        name={iconoIzquierda} 
                        size={28} 
                        color={colorIconoIzquierda || theme.colors.primary} 
                    />
                </View>
                
                <View style={styles.textContainer}>
                    <Text 
                        variant="titleMedium" 
                        style={[
                            styles.mainText,
                            { color: colorTexto || theme.colors.onSurface }
                        ]}
                    >
                        {textoBoton}
                    </Text>
                    {textoBotonSub && (
                        <Text 
                            variant="bodySmall"
                            style={[
                                styles.subText,
                                { color: colorTextoSub || theme.colors.onSurfaceVariant }
                            ]}
                            numberOfLines={2}
                        >
                            {textoBotonSub}
                        </Text>
                    )}
                </View>

                <View style={[styles.arrowContainer, { backgroundColor: `${colorIconoDerecha}15` }]}>
                    <Ionicons 
                        name={iconoDerecha} 
                        size={24} 
                        color={colorIconoDerecha || theme.colors.primary} 
                    />
                </View>
            </Surface>
        </TouchableRipple>
    );
};

const styles = StyleSheet.create({
    touchable: {
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 16,
        overflow: 'hidden',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 16,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.15,
                shadowRadius: 8,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    iconContainer: {
        width: 52,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 26,
        marginRight: 12,
    },
    arrowContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: 8,
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 8,
    },
    mainText: {
        fontWeight: '700',
        marginBottom: 4,
        fontSize: 16,
        letterSpacing: 0.3,
    },
    subText: {
        opacity: 0.8,
        fontSize: 14,
        lineHeight: 18,
    },
});

export default BotonCategorias;    