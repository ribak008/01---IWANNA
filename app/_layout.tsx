import { Stack } from 'expo-router/stack';
import { useEffect } from 'react';

export default function Layout() {
  console.log('Layout principal renderizado');

  useEffect(() => {
    console.log('initialRouteName en Layout:', 'Account');
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='(auth)'
    >
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(favoritos)" options={{ headerShown: false }} />
      <Stack.Screen name="(mas)" options={{ headerShown: false }} />
      <Stack.Screen name="(categorias)" options={{ headerShown: false }} />
    </Stack>
  );
}