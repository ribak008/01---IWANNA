import React from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
    textoBoton?: string;
    textoProfesion?: string;
    colorTexto?: string;
    colorTextoProfesion?: string;
    bgColor?: string;
    numeroMensaje?: number;
    onPress: () => void;
    avatar?: any;
};

const BotonMensaje: React.FC<Props> = ({ 
    textoBoton, 
    colorTexto, 
    onPress,
    bgColor, 
    numeroMensaje, 
    avatar, 
    textoProfesion, 
    colorTextoProfesion 
}) => {
    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: bgColor }]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View style={styles.content}>
                <View style={styles.leftContent}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={avatar}
                            style={styles.avatar}
                        />
                        {numeroMensaje && numeroMensaje > 0 && (
                            <View style={styles.badgeContainer}>
                                <Text style={styles.badgeText}>{numeroMensaje}</Text>
                            </View>
                        )}
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.name, { color: colorTexto }]}>{textoBoton}</Text>
                        <Text style={[styles.profession, { color: colorTextoProfesion }]}>{textoProfesion}</Text>
                    </View>
                </View>
                <View style={styles.rightContent}>
                    <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 16,
        overflow: 'hidden',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 4,
            },
            android: {
                elevation: 2,
            },
        }),
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
    },
    leftContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    avatarContainer: {
        position: 'relative',
        marginRight: 12,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        borderWidth: 2,
        borderColor: '#E2E8F0',
    },
    badgeContainer: {
        position: 'absolute',
        top: -4,
        right: -4,
        backgroundColor: '#3B82F6',
        borderRadius: 12,
        minWidth: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },
    badgeText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '600',
        paddingHorizontal: 4,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 2,
    },
    profession: {
        fontSize: 14,
        opacity: 0.8,
    },
    rightContent: {
        marginLeft: 8,
    },
});

export default BotonMensaje;    