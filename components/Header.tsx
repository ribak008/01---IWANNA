import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Alert, Text, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Link } from 'expo-router';


interface HeaderProps {
    titulo?: string;
    bgColor?: string;
}

export default function Header({ titulo, bgColor = '#fff' }: HeaderProps) {
    const handleLogout = () => {
        <link rel="stylesheet" href="/Home" />
        
        
    };

    return (
        <View style={[styles.container, { backgroundColor: bgColor }]}>
            <View style={styles.contentContainer}>
                <Link href="/(auth)" asChild>
                    <TouchableOpacity 
                        style={styles.profileContainer}
                        activeOpacity={0.7}
                    >
                        <View style={styles.profileImageContainer}>
                            <Image
                                source={require('../assets/images/perfil.png')}
                                style={styles.userImage}
                            />
                        </View>
                    </TouchableOpacity>
                </Link>
                
                {titulo && (
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>{titulo}</Text>
                    </View>
                )}

                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/images/logo.jpg')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    profileContainer: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImageContainer: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#8BC34A',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
            },
            android: {
                elevation: 3,
            },
        }),
    },
    userImage: {
        width: 39,
        height: 39,
        borderRadius: 19.5,
    },
    titleWrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#8BC34A',
        letterSpacing: 0.5,
    },
    logoContainer: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 50,
        height: 50,
    },
}); 