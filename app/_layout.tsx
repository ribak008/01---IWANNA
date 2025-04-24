import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { auth } from '../config/firebase';

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    // Redirigir directamente a la página de tabs
    router.replace('(tabs)');
  }, []);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
}