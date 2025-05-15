import React from 'react';
import { View, Image, StyleSheet, Platform, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Appbar, IconButton, Text, useTheme, Surface } from 'react-native-paper';

interface HeaderProps {
    titulo?: string;
    showBackButton?: boolean;
    showLogo?: boolean;
    showProfile?: boolean;
}

export default function Header({ 
    titulo, 
    showBackButton = false, 
    showLogo = true,
    showProfile = true 
}: HeaderProps) {
    const router = useRouter();
    const theme = useTheme();

    return (
        <Surface style={styles.container} elevation={4}>
            <LinearGradient
                colors={['#4C1D95', '#7C3AED']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
            >
                <Appbar.Header style={styles.appbar}>
                    <View style={styles.contentContainer}>
                        <View style={styles.leftContainer}>
                            {showBackButton ? (
                                <IconButton
                                    icon="arrow-left"
                                    iconColor="#FFFFFF"
                                    size={24}
                                    onPress={() => router.back()}
                                    style={styles.backButton}
                                />
                            ) : titulo && (
                                <View style={styles.titleWrapper}>
                                    <Text variant="titleLarge" style={styles.title}>
                                        {titulo}
                                    </Text>
                                </View>
                            )}
                        </View>

                        <View style={styles.centerContainer}>
                            {showLogo && (
                                <View style={styles.logoContainer}>
                                    <Image
                                        source={require('../assets/images/icons/logo-sin-fondo-texto.png')}
                                        style={styles.logo}
                                        resizeMode="contain"
                                    />
                                </View>
                            )}
                        </View>

                        <View style={styles.rightContainer}>
                            {showProfile && !showBackButton && (
                                <IconButton
                                    icon={() => (
                                        <View style={styles.profileImageContainer}>
                                            <Image
                                                source={require('../assets/images/perfil.png')}
                                                style={styles.userImage}
                                            />
                                        </View>
                                    )}
                                    size={40}
                                    onPress={() => router.push('/(auth)')}
                                    style={styles.profileButton}
                                />
                            )}
                        </View>
                    </View>
                </Appbar.Header>
            </LinearGradient>
        </Surface>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        overflow: 'hidden',
    },
    gradient: {
        flex: 1,
    },
    appbar: {
        backgroundColor: 'transparent',
        elevation: 0,
        height: Platform.OS === 'ios' ? 90 : 70,
        paddingTop: Platform.OS === 'ios' ? 30 : 10,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
    },
    leftContainer: {
        width: 100,
        alignItems: 'flex-start',
    },
    centerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightContainer: {
        width: 100,
        alignItems: 'flex-end',
    },
    backButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        margin: 0,
    },
    profileButton: {
        margin: 0,
    },
    profileImageContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    userImage: {
        width: 34,
        height: 34,
        borderRadius: 17,
    },
    titleWrapper: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    title: {
        color: '#FFFFFF',
        letterSpacing: 1,
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 18,
        fontFamily: Platform.select({
            ios: 'Helvetica Neue',
            android: 'Roboto',
        }),
        textShadowColor: 'rgba(0, 0, 0, 0.4)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 3,
        opacity: 0.95,
    },
    logoContainer: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 75,
        height: 75,
    },
}); 