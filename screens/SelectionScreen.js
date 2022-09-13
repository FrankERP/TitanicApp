import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { DocumentPlusIcon } from 'react-native-heroicons/outline';

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
      <ScrollView className='flex-1 pb-6 mb-2'>
        <View className='mx-4 p-2'>
          <Text className='mt-3 mb-3 text-xl text-fuchsia-200 text-center'>Random Forest</Text>
          <Text className='mt-3 text-sm text-justify text-fuchsia-200'>La selección del mejor algoritmo se realizó después de hacer diferentes intentos de modelar y predecir con la Data Frame del Titanic. El algoritmo Random Forest (RF) obtuvo un 85.4% de presición, el segundo algoritmo Redes Neuronales (NN) alcanzó un 83.9% de presición, como se pueden observar las tablas de abajo. Esto se logró realizándolo en varias categorías lo que ayudó a que tuviera mejores desiciones el RF y en NN aún sin categorizar no logramos un mejor resultado. Es decir los árboles individuales predijeron las clases con mayor cantidad de votos, esto fue porque tuvimos categorías no correlacionadas en cada árbol que en conjunto produjeron una mejor predicción. Los resultados en gráficas de cada algoritmo con su analizis detallado se puede acceder dando clic en el ícono.</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Screen_Alg2')}
        className='flex-row p-1 mx-3 items-center'>
          <Text className='mx-8 my-4 text-base text-gray-50'>Resultados Random Forest(RF)</Text>
          <DocumentPlusIcon 
          size={30} color='#AF00CC'/>
        </TouchableOpacity>
        <Image source={require('../assets/rfres.jpg')}
          className='h-[120px] w-[310px] rounded-none self-center'/>
        
        <TouchableOpacity onPress={()=>navigation.navigate('Screen_Alg1')}
        className='flex-row p-1 mx-3 items-center'>
          <Text className='mx-8 my-4 text-base text-gray-50'>Resultados Neural Networks(NN)</Text>
          <DocumentPlusIcon size={30} color='#AF00CC'/>
        </TouchableOpacity>
        <Image source={require('../assets/nnres.jpg')}
          className='h-[120px] w-[310px] rounded-none self-center'/>
        
      </ScrollView>
    </SafeAreaView>
  )
}