import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
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
    <SafeAreaView className='pt-10 items-center'>
      <View className='flex-1'>
        <Text>¿Sobrevivirías al Titanic?</Text>
        <Animatable.Image
          source={require('../assets/jackdrowning.gif')}
          animation='slideInUp'
          iterationCount={1}
          className='h-85 w-85'
        />
        <Text>En "Titanic Jack or Rose App" vas a saber ¿quién de los dos serías?</Text>
      </View>
      <View>
        <Text>Equipo 1</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} className='w-20 h-20 rounded bg-red-600'>
        <Text className='text-base text-white'>Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}