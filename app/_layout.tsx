import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>

      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="Account" options={{ headerShown: false }} />
      <Stack.Screen name="(favoritos)" options={{ headerShown: false }} />
      <Stack.Screen name="(mas)" options={{ headerShown: false }} />
      <Stack.Screen name="(categorias)" options={{ headerShown: false }} />

    </Stack>
  );
}
