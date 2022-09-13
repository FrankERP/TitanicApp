import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Linking } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { FloatingAction } from 'react-native-floating-action';
import { DocumentCheckIcon, DocumentMagnifyingGlassIcon, FaceSmileIcon } from 'react-native-heroicons/outline';
import { ArrowLeftIcon } from 'react-native-heroicons/outline'

export default function HomeScreen() {

  const navigation = useNavigation()

  // boton navegador
  const actions = [
    {
      text: "Predicción",
      icon: <FaceSmileIcon size={30} color='white'
      onPress={()=>navigation.navigate('PredictionScreen')}/>,
      name: "bt_alergy",
      position: 1,
      color: '#AF00CC',
    },
    {
      text: "Algoritmo 1",
      icon: <DocumentMagnifyingGlassIcon size={30} color='white'
      onPress={()=>navigation.navigate('Screen_Alg1')}/>,
      name: "bt_language",
      position: 3,
      color: '#AF00CC'
    },
    {
      text: "Algoritmo 2",
      icon: <DocumentMagnifyingGlassIcon size={30} color='white'
      onPress={()=>navigation.navigate('Screen_Alg2')}/>,
      name: "bt_room",
      position: 4,
      color: '#AF00CC'
    },
    {
      text: "Selección Mejor Algoritmo",
      icon: <DocumentCheckIcon size={30} color='white'
      onPress={()=>navigation.navigate('SelectionScreen')}/>,
      name: "bt_videocam",
      position: 2,
      color: '#AF00CC'
    }
  ]

  useLayoutEffect(() => {
    navigation.setOptions( {
        headerShown: false,
      });
  }, [])


  return (
    <SafeAreaView className='flex-1 bg-gray-900 pt-8 '>
      <View className='p-7 border-b border-[#AF00CC] bg-gray-900 shadow-xs'>
        <Text className='mb-1 mx-10 text-2xl text-gray-50 text-center'>Competencia Titanic Machine Learning</Text>
          <TouchableOpacity className='absolute top-6 left-5 p-2 bg-gray-900 border border-solid border-purple-600  rounded-full' 
            onPress={()=>navigation.navigate('First')}>
            <ArrowLeftIcon size={20} color='#AF00CC'/>
          </TouchableOpacity>
      </View>   
      <ScrollView className='bg-gray-900 flex-1' 
        contentContainerStyle={{
          paddingBottom:100,
        }}>
        <View className='p-2 m-4 items-center flex-1'>
        <Image source={require('../assets/titanicsink.gif')}
            className='h-[200px] w-[300px] rounded-none'/>
          <Text className='mt-3 mb-3 text-sm text-justify text-fuchsia-200'>Usar Machine Learning para encontrar un modelo predictivo que arroje cuáles pasajeros pueden sobrevivir al naufragio del Titanic. El hundimiento del famoso Titanic fue uno de los naufragios más crueles de la historia, el día 15 de abril de 1912, en el transcurso de su primer viaje, el transatlántico que era considerado por su envergadura como insumergible, fue hundido al chocar contra un iceberg. Dado que no se pensaba que fueran a necesitar los botes salvavidas, no hubo suficientes para todos los pasajeros. Aquello resultó en una gran tragedia con 1502 muertos de los 224 pasajeros y tripulantes. Algunas personas o grupos tuvieron mayor probabilidad de sobrevivir, gracias a ciertas condiciones que vamos a predecir construyendo dos modelos predictivos. ¿Qué tipo de pasajero tendría mas probabilidad de sobrevivir?, de acuerdo a datos como: Nombre, Edad, Sexo, Clase socioeconómica, entre otras.</Text>
          <Text className='text-sm text-justify text-fuchsia-200'>Es importante lograr un porcentaje alto de predicción, ya que este tipo de eventos ocurre no solo con barcos, también, en aviones, trenes, naves espaciales, entre otros transportes. Además, puede ayudar a predecir y mejorar la seguridad en otros casos como terremotos, huracanes, deslaves u otros desastres naturales. Aunque, los parámetros pueden cambiar, los modelos suelen ser parecidos o al menos es una forma de acercamiento a la resolución del problema.</Text>
        </View>
        <View className='m-6 flex-1'>
          <Text className='my-5 text-base text-white text-justify'>Para navegar en la App dar clic al botón "+" y después al desplegar las opciones, tocar el ícono de tu selección.</Text>
          <Text className='mb-3 text-xl text-white text-center'>App Developers (clic name for github):</Text>
          <TouchableOpacity 
          // onPress={() => Linking.openURL('https://github.com/')}
          className='flex-row'>
            <Text className='mb-3 text-base text-fuchsia-200'>Jorge Gerardo Iglesias Ortiz</Text>
            <Text className='mb-3 mx-2 text-base  text-fuchsia-200'>A01653261</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/FrankERP')}
          className='flex-row'>
            <Text className='mb-3 text-base text-fuchsia-200'>Francisco Emiliano Rocha Pineda</Text>
            <Text className='mb-3 mx-2 text-base text-fuchsia-200'>A01652082</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/a01658142')}
          className='flex-row'>
            <Text className='mb-3 text-base text-fuchsia-200'>Jorge Antonio Hoyo García</Text>
            <Text className='mb-3 mx-2 text-base text-fuchsia-200'>A01658142</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/FrankERP/TitanicApp')}
          className='w-36 h-36 mt-6  bg-transparent self-center items-center pt-5 rounded-full border border-white'>
            <Text className='text-xs text-white'>Clic to see project</Text>
            <Image source={require('../assets/github.gif')}
            className='h-[100px] w-[100px] rounded-full'/>
          </TouchableOpacity>
        </View>

      </ScrollView>
      {/*FloatIcon */}
      <View className='relative'>
          <FloatingAction
            actions= {actions}
            color='#AF00CC'
            showBackground= {false}
            position='right'
            margin= {4}
            size={10}
          /> 
        </View>
    </SafeAreaView>
  )
}