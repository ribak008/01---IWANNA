import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Checkbox } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { useRouter } from 'expo-router';


const planDetails = [
  {
    id: 'free',
    name: 'FREE',
    advantages: ['Acceso limitado a funciones', 'Anuncios en la app'],
    price: 'Gratuito'
  },
  {
    id: 'plata',
    name: 'PLATA',
    advantages: [
      'Acceso a contenido premium',
      'Sin anuncios',
      'Soporte prioritario'
    ],
    price: '$9.990/mes'
  },
  {
    id: 'oro',
    name: 'ORO',
    advantages: [
      'Todas las funciones premium',
      'Sin anuncios',
      'Soporte 24/7',
      'Acceso anticipado a nuevas funciones'
    ],
    price: '$19.990/mes'
  }
]

export default function Planes() {
    const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState(null)

  const selectPlan = (planId: any) => {
    setSelectedPlan(planId)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Revisa nuestros planes</Text>
        {planDetails.map(plan => (
            <TouchableOpacity key={plan.id} onPress={() => selectPlan(plan.id)}>
            <View style={[styles.card, selectedPlan === plan.id && styles.cardSelected]}>
                <View style={styles.cardHeader}>
                <Text style={styles.planName}>{plan.name}</Text>
                <Checkbox
                    status={selectedPlan === plan.id ? 'checked' : 'unchecked'}
                    onPress={() => selectPlan(plan.id)}
                />
                </View>
                <Text style={styles.price}>{plan.price}</Text>
                <View style={styles.advantages}>
                {plan.advantages.map((advantage, index) => (
                    <Text key={index} style={styles.advantage}>
                    • {advantage}
                    </Text>
                ))}
                </View>
            </View>
            </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.button} 
            onPress={() => router.push('/(mas)/(mi-plan)/mi-plan')}>
            <Text style={styles.buttonText}>Seleccionar plan</Text>
        </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    scrollContainer: {
        padding: 20,
        paddingBottom: 30,
    },
  
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 }
  },
  cardSelected: {
    borderWidth: 2,
    borderColor: '#007AFF'
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  planName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10
  },
  advantages: {
    marginLeft: 10
  },
  advantage: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
})
