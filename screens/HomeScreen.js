import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
import { FloatingAction } from 'react-native-floating-action';
import { GlobeAltIcon } from 'react-native-heroicons/solid';

export default function HomeScreen() {

  const navigation = useNavigation()
  const actions = [
    {
      text: "Prediction",
      icon: <GlobeAltIcon size={30} color='white'
      onPress={()=>navigation.navigate('PredictionScreen')}/>,
      name: "bt_alergy",
      position: 1,
      color: '#ffb451'
    },
    {
      text: "Algoritmo 1",
      icon: <GlobeAltIcon size={30} color='white'
      onPress={()=>navigation.navigate('Screen_Alg1')}/>,
      name: "bt_language",
      position: 3,
      color: '#ffb451'
    },
    {
      text: "Algoritmo 2",
      icon: <GlobeAltIcon size={30} color='white'
      onPress={()=>navigation.navigate('Screen_Alg2')}/>,
      name: "bt_room",
      position: 4,
      color: '#ffb451'
    },
    {
      text: "Selection",
      icon: <GlobeAltIcon size={30} color='white'
      onPress={()=>navigation.navigate('SelectionScreen')}/>,
      name: "bt_videocam",
      position: 2,
      color: '#ffb451'
    }
    // {text: 'Prediction',
    // icon: <ShoppingBagIcon size={30} color='red' />,
    // name: 'pred',
    // position: 3,
    // color: '#fff'},
    // {text: 'Prediction',
    // icon: <GlobeAltIcon size={30} color='red' />,
    // name: 'pred',
    // position: 4,
    // color: '#fff',},
  ]

  useLayoutEffect(() => {
    navigation.setOptions( {
        headerShown: false,
      });
  }, [])


  return (
    <SafeAreaView className='bg-red-500 pt-10'>
      <ScrollView className='bg-[#fdfbf0] flex-1 ' 
        contentContainerStyle={{
          paddingBottom:350,
        }}>
        <View>
          <Text>Nombre del reto</Text>
          <Text>Descripción del problema</Text>
          <Text>Importancia de resolver el problema</Text>
        </View>
        <View>
          <Text>Equipo 1</Text>
          <View>
            <Text>Alumno 1</Text>
            <Text>matricula 1</Text>
          </View>
          <View>
            <Text>Alumno 2</Text>
            <Text>matricula 2</Text>
          </View>
          <View>
            <Text>Alumno 3</Text>
            <Text>matricula 3</Text>
          </View>
        </View>
        {/*FloatIcon */}
        <View className='absolute pt-[350px] pl-[380px]'>
          <FloatingAction
            actions= {actions}
            color='#ffb451'
          /> 
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}