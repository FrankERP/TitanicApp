import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';

export default function FirstScreen() {

const navigation = useNavigation()
useLayoutEffect(() => {
  navigation.setOptions( {
      headerShown: false,
    });
}, [])

  return (
    <SafeAreaView className='pt-10 items-center bg-gray-900 h-full w-full'>
      <View className='px-2 pt-14 flex-1 items-center '>
        <Text className='text-[30px] pb-12 m-4 text-gray-50'>¿Sobrevivirías al Titanic?</Text>
        <Animatable.Image
          source={require('../assets/jackdrowning.gif')}
          animation='slideInUp'
          iterationCount={1}
          className='h-85 w-85'
        />
        <Text className='px-2 pt-5 m-1 text-4xl text-[#AF00CC] font-extrabold'>Jack or Rose App</Text>
        <Text className='px-2 pt-2 m-1 text-base text-fuchsia-200 text-justify'>En esta App vas a saber ¿quién de los dos serías?                             Desarrollada por alumnos del Tecnológico de Monterey, Campus Ciudad de México para la materia Inteligencia artificial avanzada para la ciencia de datos I</Text>
      </View>
      <View className='px-2 py-2'>
        <Text className='px-2 py-2 m-2 text-xl text-fuchsia-200'>Equipo 1</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} className='w-[220px] h-[65px] rounded-full border-2 border-[#AF00CC] bg-transparent'>
        <Text className='text-3xl my-3 text-[#AF00CC] self-center'>Start</Text>
      </TouchableOpacity>
      <View className='px-3 py-10 m-2 h-fit w-screen'>
        <Image source={require('../assets/tec.png')}
        className='h-[55px] w-[210px] bg-white p-4 rounded'/>
      </View>
      
    </SafeAreaView>
  )
}