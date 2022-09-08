import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useNavigation} from '@react-navigation/native'

export default function FirstScreen() {

const navigation = useNavigation()
useLayoutEffect(() => {
  navigation.setOptions( {
      headerShown: false,
    });
}, [])

  return (

    
    <SafeAreaView>
      <View>
        <Text>FirstScreen</Text>
        <Text>imagen barco hundiéndose</Text>
      </View>
      <View>
        <Text>Equipo Random</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} className='w-20 h-20 rounded bg-red-600'>
        <Text className='text-base text-white'>Start</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  )
}