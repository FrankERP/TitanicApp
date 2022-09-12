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
      icon: <GlobeAltIcon size={30} color='#fff'
      onPress={()=>navigation.navigate('PredictionScreen')}/>,
      name: "bt_alergy",
      position: 1,
      color: '#8700CB'
    },
    {
      text: "Algoritmo 1",
      icon: <GlobeAltIcon size={30} color='white'
      onPress={()=>navigation.navigate('Screen_Alg1')}/>,
      name: "bt_language",
      position: 3,
      color: '#8700CB'
    },
    {
      text: "Algoritmo 2",
      icon: <GlobeAltIcon size={30} color='white'
      onPress={()=>navigation.navigate('Screen_Alg2')}/>,
      name: "bt_room",
      position: 4,
      color: '#8700CB'
    },
    {
      text: "Selection",
      icon: <GlobeAltIcon size={30} color='white'
      onPress={()=>navigation.navigate('SelectionScreen')}/>,
      name: "bt_videocam",
      position: 2,
      color: '#8700CB'
    }
  ]

  useLayoutEffect(() => {
    navigation.setOptions( {
        headerShown: false,
      });
  }, [])


  return (
    <SafeAreaView className='bg-white pt-10'>
      <ScrollView className='bg-black flex-1 ' 
        contentContainerStyle={{
          paddingBottom:350,
        }}>
        <View className='p-2 m-4 '>
          <Text className='mb-3 mx-8 text-2xl text-white text-center'>Competencia Titanic Machine Learning</Text>
          <Text className='mb-3 text-sm text-justify text-fuchsia-200'>Usar Machine Learning para encontrar un modelo predictivo que arroje cuáles pasajeros pueden sobrevivir al naufragio del Titanic. El hundimiento del famoso Titanic fue uno de los naufragios más crueles de la historia, el día 15 de abril de 1912, en el transcurso de su primer viaje, el transatlántico que era considerado por su envergadura como insumergible, fue hundido al chocar contra un iceberg. Dado que no se pensaba que fueran a necesitar los botes salvavidas, no hubo suficientes para todos los pasajeros. Aquello resultó en una gran tragedia con 1502 muertos de los 224 pasajeros y tripulantes. Algunas personas o grupos tuvieron mayor probabilidad de sobrevivir, gracias a ciertas condiciones que vamos a predecir construyendo dos modelos predictivos. ¿Qué tipo de pasajero tendría mas probabilidad de sobrevivir?, de acuerdo a datos como: Nombre, Edad, Sexo, Clase socioeconómica, entre otras.</Text>
          <Text className='text-sm text-justify text-fuchsia-200'>Es importante lograr un porcentaje alto de predicción, ya que, este tipo de eventos ocurre no solo con barcos, también, en aviones, trenes, naves espaciales, entre otros transportes. Además, puede ayudar a mejorar la seguridad en otros casos como terremotos, huracanes, deslaves y muchos otros desastres naturales. Aunque, los parámetros pueden cambiar, los modelos suelen ser parecidos o al menos es una forma de acercamiento a la resolución del problema.</Text>
        </View>
        <View className='m-6'>
          <Text className='mb-3 mx-8 text-xl text-white text-center'>Equipo 1</Text>
          <View className='flex-row'>
            <Text className='mb-3 text-sm text-fuchsia-200'>Jorge Gerardo Iglesias Ortiz</Text>
            <Text className='mb-3 mx-2 text-sm  text-fuchsia-200'>A01653261</Text>
          </View>
          <View className='flex-row'>
            <Text className='mb-3 text-sm text-fuchsia-200'>Francisco Emiliano Rocha Pineda</Text>
            <Text className='mb-3 mx-2 text-sm text-fuchsia-200'>A01652082</Text>
          </View>
          <View className='flex-row'>
            <Text className='mb-3 text-sm text-fuchsia-200'>Jorge Antonio Hoyo García</Text>
            <Text className='mb-3 mx-2 text-sm text-fuchsia-200'>A01658142</Text>
          </View>
        </View>
        {/*FloatIcon */}
        <View className='absolute pt-[750px] pl-[380px]'>
          <FloatingAction
            actions= {actions}
            color='#8700CB'
          /> 
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}