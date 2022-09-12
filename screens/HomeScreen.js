import { View, Text, SafeAreaView } from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useNavigation} from '@react-navigation/native'

export default function HomeScreen() {

  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions( {
        headerShown: false,
      });
  }, [])

  return (
    <SafeAreaView>
      <View>
        <Text className='font-extrabold text-gray-300'>
          Header 
        </Text>
      </View>
      <Text>HomeScreen</Text>
      <Text>Texto para probar commit</Text>
      <Text>Texto para probar commit Jorge</Text>
    
    </SafeAreaView>
  )
}