import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';

export default function SelectionScreen() {

  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions( {
        headerShown: false,
      });
  }, [])

  return (
    <SafeAreaView className='bg-white pt-10'>
      <View className='bg-gray-900 flex-1'>
        <View>
          <Text className='pt-3 mb-3 mx-10 text-2xl text-white text-center'>Selección del Mejor Algoritmo</Text>
            <TouchableOpacity className='absolute top-5 left-2 p-3 bg-[#8700CB] rounded-full' 
              onPress={navigation.goBack}>
              <ArrowLeftIcon size={20} color='white'/>
            </TouchableOpacity>
        </View>
        <View className='m-2 p-2'>
          <Image/>
          <Text className='mt-3 mb-3 text-xl text-fuchsia-200 text-center'>Algoritmo seleccionado</Text>
          <Text className='mt-3 mb-3 text-sm text-justify text-fuchsia-200'>Justificación de selección</Text>
        </View>
      </View>
      
      
      
    </SafeAreaView>
  )
}