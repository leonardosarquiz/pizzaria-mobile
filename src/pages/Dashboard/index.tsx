
import { useState } from "react";
import { SafeAreaView, Text, View, TouchableOpacity, TextInput, StyleSheet, Alert } from "react-native";
import { api } from "../../services/api";
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamsList } from "../../routes/app.routes";





export default function Dashboard() {

  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>()


  const [number, setNumber] = useState('');

  async function openOrder() {
    if (number === '') {
      return Alert.alert('Mesa', 'Informe o numero da mesa')
    }

    const response = await api.post('/order', {
      table: Number(number)
    })




    navigation.navigate('Order', { number: number, order_id: response.data.id })


    setNumber('');

  }

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Novo pedido</Text>

      <TextInput placeholder="Numero da mesa" placeholderTextColor="#f0f0f0" style={styles.input} keyboardType="numeric" value={number} onChangeText={setNumber} />


      <TouchableOpacity style={styles.button} onPress={openOrder}>
        <Text style={styles.buttonText}>Abrir mesa</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#1d1d2e'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 24
  },
  input: {
    width: '90%',
    height: 60,
    backgroundColor: '#101026',
    borderRadius: 4,
    paddingHorizontal: 8,
    textAlign: 'center',
    fontSize: 20,
    color: '#fff'
  },
  button: {
    width: '90%',
    height: 40,
    backgroundColor: '#3fffa3',
    borderRadius: 4,
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#101026',
    fontWeight: 'bold'
  }
})