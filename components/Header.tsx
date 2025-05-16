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
                colors={['#3B82F6', '#2563EB']}
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
                                    size={22}
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
                                        source={require('../assets/images/icons/iwanna_manusc.png')}
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
                                    size={36}
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
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.15)',
        overflow: 'hidden',
    },
    gradient: {
        flex: 1,
    },
    appbar: {
        backgroundColor: 'transparent',
        elevation: 0,
        height: Platform.OS === 'ios' ? 85 : 65,
        paddingTop: Platform.OS === 'ios' ? 25 : 10,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    leftContainer: {
        width: 90,
        alignItems: 'flex-start',
    },
    centerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightContainer: {
        width: 90,
        alignItems: 'flex-end',
    },
    backButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        margin: 0,
        borderRadius: 8,
    },
    profileButton: {
        margin: 0,
    },
    profileImageContainer: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
            },
            android: {
                elevation: 1,
            },
        }),
    },
    userImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    titleWrapper: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    title: {
        color: '#FFFFFF',
        letterSpacing: 0.3,
        textTransform: 'uppercase',
        fontWeight: '600',
        fontSize: 16,
        fontFamily: Platform.select({
            ios: 'Helvetica Neue',
            android: 'Roboto',
        }),
    },
    logoContainer: {
        width: 110,
        height: 110,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    logo: {
        width: 100,
        height: 100,
        opacity: 1,
        ...Platform.select({
            ios: {
                shadowColor: '#3B82F6',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
            },
            android: {
                elevation: 5,
            },
        }),
    },
}); 