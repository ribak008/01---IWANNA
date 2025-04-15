import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="Account" options={{ headerShown: false }} />
      <Stack.Screen name="Favoritos" options={{ headerShown: false }} />
      <Stack.Screen name="Mi-perfil" options={{ headerShown: false }} />
      <Stack.Screen name="Categorias" options={{ headerShown: false }} />

    </Stack>
  );
}
