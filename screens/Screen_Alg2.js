import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native'
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
    <SafeAreaView className='bg-gray-900 flex-1 pt-8'>
      <View>
        <View className='p-7 border-b border-[#AF00CC] bg-gray-900 shadow-xs'>
          <View>
            <Text className='text-lg font-bold text-center text-gray-50'>Algoritmo Random Forest</Text>
          </View>
          <TouchableOpacity onPress={navigation.goBack} 
            className='absolute top-6 left-5 p-2 bg-gray-900 border border-solid border-purple-600 rounded-full'>
              <ArrowLeftIcon size={20} color='#AF00CC'/>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView className='flex-1 pb-6 mb-2'>
        <View className='mx-4 p-2'>
          <Text className='mt-3 text-sm text-justify text-fuchsia-200'>Se decidió utilizar Random Forest(RF) ya que es de facil interpretación pues se basa en votación lo que minimiza los errores, es rapido de entrenar y rectifica el problema de sobreajuste en los árboles de desición. Aunado a esto, es robusto cuando en los datos encontramos valores atípicos y proporcionar selección automática de características.</Text>
          <Text className='mt-3 text-sm text-justify text-fuchsia-200'>Los resultados obtenidos al entrenar el modelo no fueron los mejores, sin embargo, al utilizar diferentes categorías fuimos obteniendo un mejor porcentaje de precisión. No obstante, en la plataforma Kaggle se obtuvo un menor porcentaje que en nuestro archivo Coolab.</Text>

          <Text className='mx-8 my-2 text-base text-gray-50'>Presición Obtenida en Coolab</Text>
          <Text className='mt-1 mb-3 text-sm text-justify text-fuchsia-200'>En la imagen de abajo podemos ver la presición, recall, el puntaje F1 donde se tienen puntajes altos. Lo que refuerza nuestra desición de utilizar este algoritmo.</Text>
          <Image source={require('../assets/rfres.jpg')}
          className='h-[120px] w-[310px] rounded self-center'/>

          <Text className='mx-8 mb-2 mt-4 text-base text-gray-50'>Matriz de confusión </Text>
          <Text className='mt-1 mb-3 text-sm text-justify text-fuchsia-200'>Se observa en la Matriz que los altos valores en la diagonal nos indica un modelo robusto, con las dos clases que se usaron donde los valores posibles son 1 y 0.</Text>
          <Image source={require('../assets/RF_Matriz.png')}
          className='h-[310px] w-[310px] rounded self-center'/>

          <Text className='mx-8 mb-2 mt-4 text-base text-gray-50'>ROC y AUC</Text>
          <Text className='mt-1 mb-3 text-sm text-justify text-fuchsia-200'>Sabemos que la medida de la matriz no es suficiente para decidir que tan bueno es el modelo, por lo que en la parte de abajo vemos que la curva ROC en azul, sube a un ritmo cercano de tasa positiva cercano a la esquina izquierda. El área bajo la curva (AUC) es de 0.83 lo que nos da un nivel de alta sensitividad y alta especificidad.</Text>
          <Image source={require('../assets/RF_ROC_y_AUC.png')}
          className='h-[310px] w-[310px] rounded self-center'/>

          <Text className='mx-8 mb-2 mt-4 text-base text-gray-50'>Puntaje obtenido en Kaggle</Text>
          <Image source={require('../assets/rfkaggle.jpeg')}
          className='h-[30px] w-[350px] rounded self-center'/>
          
          <Text className='my-3 text-sm text-justify text-fuchsia-200'>Los datos de la base de datos fueron analizados y tratados antes de entrenar el modelo. El trabajo se puede consultar en los siguientes enlaces.</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://colab.research.google.com/drive/1naWsMmvnty6hw97H6UizBRdYYq9c9WDA?usp=sharing')}
          className='m-2 p-2 border-2 border-[#AF00CC] rounded-full'>
            <Text className='text-white text-center'>Enlace Coolab</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL('https://drive.google.com/file/d/18b609qnBnZjxHBxAwN4a0JD2d4WQPHu4/view?usp=sharing')}
          className='m-2 p-2 border-2 border-[#AF00CC] rounded-full'>
            <Text className='text-white text-center'>Enlace CSV</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}