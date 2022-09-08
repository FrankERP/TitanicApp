import { View, Text } from 'react-native'
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
    <View>
      <Text>HomeScreen</Text>
      <Text>Texto para probar commit</Text>
    </View>
  )
}