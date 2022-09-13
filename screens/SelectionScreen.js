import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';

export default function SelectionScreen() {

  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions( {
        headerShown: false,
      });
  }, [])

  return (
    <SafeAreaView className='bg-gray-900 flex-1 pt-8'>
      <View className='p-7 border-b border-[#AF00CC] bg-gray-900 shadow-xs'>
        <Text className='mx-12 text-lg font-bold text-center text-gray-50'>Selección del Mejor Algoritmo</Text>
          <TouchableOpacity className='absolute top-6 left-5 p-2 bg-gray-900 border border-solid border-purple-600 rounded-full' 
            onPress={navigation.goBack}>
            <ArrowLeftIcon size={20} color='#AF00CC'/>
          </TouchableOpacity>
      </View>
      <ScrollView>
      <View className='m-2 p-2'>
          <Image/>
          <Text className='mt-3 mb-3 text-xl text-fuchsia-200 text-center'>Algoritmo seleccionado</Text>
          <Text className='mt-3 mb-3 text-sm text-justify text-fuchsia-200'>Justificación de selección</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}