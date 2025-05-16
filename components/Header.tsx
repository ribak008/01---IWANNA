import React from 'react';
import { View, Image, StyleSheet, Platform, StatusBar } from 'react-native';
import { useRouter, useNavigation } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Appbar, IconButton, Text, useTheme, Surface } from 'react-native-paper';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

interface HeaderProps {
    titulo?: string;
    showBackButton?: boolean;
    showLogo?: boolean;
    showProfile?: boolean;
    bgColor?: string;
}

export default function Header({ 
    titulo, 
    showBackButton = false, 
    showLogo = true,
    showProfile = true,
    bgColor = '#FFFFFF'
}: HeaderProps) {
    const router = useRouter();
    const navigation = useNavigation();
    const theme = useTheme();
    const insets = useSafeAreaInsets();

    const handleBack = () => {
        if (navigation.canGoBack()) {
            router.back();
        } else {
            // Si no hay pantalla anterior, redirigir a la pantalla principal
            router.push('/(tabs)/(inicio)');
        }
    };

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]} edges={['top']}>
            <StatusBar barStyle="dark-content" backgroundColor={bgColor} />
            <Surface style={[styles.container, { paddingTop: insets.top }]} elevation={4}>
                <LinearGradient
                    colors={['#2563EB', '#1E40AF']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradient}
                >
                    <Appbar.Header style={styles.appbar}>
                        <View style={styles.contentContainer}>
                            <View style={styles.leftContainer}>
                                {showBackButton ? (
                                    <View style={styles.backButtonContainer}>
                                        <IconButton
                                            icon="arrow-left"
                                            iconColor="#CBD5E1"
                                            size={32}
                                            onPress={handleBack}
                                            style={styles.backButton}
                                        />
                                    </View>
                                ) : (
                                    <View style={styles.backButtonContainer}>
                                        <IconButton
                                            icon="arrow-left"
                                            iconColor="#CBD5E1"
                                            size={32}
                                            onPress={handleBack}
                                            style={styles.backButton}
                                        />
                                    </View>
                                )}
                            </View>

                            {showLogo && (
                                <View style={styles.logoContainer}>
                                    <Image
                                        source={require('../assets/images/icons/iwanna_manusc.png')}
                                        style={styles.logo}
                                        resizeMode="contain"
                                    />
                                </View>
                            )}

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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        width: '100%',
    },
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
        height: Platform.OS === 'ios' ? 60 : 50,
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
    rightContainer: {
        width: 90,
        alignItems: 'flex-end',
    },
    backButtonContainer: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    backButton: {
        width: 50,
        height: 50,
        margin: 0,
        backgroundColor: 'transparent',
        ...Platform.select({
            ios: {
                shadowColor: '#3B82F6',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.7,
                shadowRadius: 12,
            },
            android: {
                elevation: 12,
            },
        }),
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
    logoContainer: {
        width: 160,
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    logo: {
        width: 150,
        height: 150,
        opacity: 1,
        tintColor: '#CBD5E1',
        ...Platform.select({
            ios: {
                shadowColor: '#3B82F6',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.7,
                shadowRadius: 12,
            },
            android: {
                elevation: 12,
            },
        }),
    },
}); 