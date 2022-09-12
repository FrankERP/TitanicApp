import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';

export default function Screen_Alg2() {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [])

  return (
    <SafeAreaView className='bg-gray-900 flex-1'>
      <View>
        <View className='p-7 border-b border-[#AF00CC] bg-gray-900 shadow-xs'>
          <View>
            <Text className='text-lg font-bold text-center text-gray-50'>Screen_Alg2</Text>
          </View>
          <TouchableOpacity onPress={navigation.goBack} 
            className='absolute top-6 left-5 p-2 bg-gray-900 border border-solid border-purple-600 rounded-full'>
              <ArrowLeftIcon size={20} color='#AF00CC'/>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}