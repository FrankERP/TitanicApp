import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';


export default function Screen_Alg1() {

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
            <Text className='text-lg font-bold text-center text-gray-50'>Algoritmo Neural Network</Text>
          </View>
          <TouchableOpacity onPress={navigation.goBack} 
            className='absolute top-6 left-5 p-2 bg-gray-900 border border-solid border-purple-600 rounded-full'>
              <ArrowLeftIcon size={20} color='#AF00CC'/>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView className='flex-1 pb-6 mb-2'>
        <View className='mx-4 p-2'>
          <Text className='mt-3 text-sm text-justify text-fuchsia-200'>Se decidió utilizar Neural Network(NN) puesto que nos da una forma de aprendizaje no lineal, además es una forma eficiente de encontrar el gradiente entre varias capas, lo que va propagando el error a una capa anterior. Esto adapta los pesos con un error parcial mejorando la presición en la salida.</Text>
          <Text className='mt-3 text-sm text-justify text-fuchsia-200'>Los resultados fueron obtenidos con datos transformados, al entrenar el modelo se tuvo una presición de 83.9% sin categorizar.</Text>

          <Text className='mx-8 my-2 text-base text-gray-50'>Presición Obtenida en Coolab</Text>
          <Text className='mt-1 mb-3 text-sm text-justify text-fuchsia-200'>En la imagen de abajo podemos ver la presición, recall, el puntaje F1, aunque son altos puntajes en presición el promedio disminuye por los bajos puntajes en F1.</Text>
          <Image source={require('../assets/nnres.jpg')}
          className='h-[120px] w-[310px] rounded self-center'/>

          <Text className='mx-8 mb-2 mt-4 text-base text-gray-50'>Matriz de confusión </Text>
          <Text className='mt-1 mb-3 text-sm text-justify text-fuchsia-200'>Se observa en la Matriz que en la diagonal principal se tienen valores altos utilizando dos categorías.</Text>
          <Image source={require('../assets/NN_Matriz.png')}
          className='h-[310px] w-[310px] rounded self-center'/>

          <Text className='mx-8 mb-2 mt-4 text-base text-gray-50'>ROC y AUC</Text>
          <Text className='mt-1 mb-3 text-sm text-justify text-fuchsia-200'>La curva ROC nos muestra que tenemos un ritmo de tasa positiva cercano a la izquierda, esto indica que es un buen modelo predictivo. El área bajo la curva (AUC) es 0.82 lo que muestra un nivel de alta especificidad y alto nivel de sensitividad en el modelo.</Text>
          <Image source={require('../assets/NN_ROC_y_AUC.png')}
          className='h-[270px] w-[340px] rounded self-center'/>

          <Text className='mx-8 mb-2 mt-4 text-base text-gray-50'>Evolución de aprendizaje</Text>
          <Text className='mt-1 mb-3 text-sm text-justify text-fuchsia-200'>La gráfica muestra que la precisión con los datos para entrenar se mantiene estable. Con los datos para probar el modelo se ve un poco de inestabilidad pero no causa problema, ya que no se dispara, lo que demuestra que el modelo fue bien entrenado.</Text>
          <Image source={require('../assets/Evolution_NN.png')}
          className='h-[280px] w-[340px] rounded self-center'/>
          
          <Text className='mx-8 mb-2 mt-4 text-base text-gray-50'>Puntaje obtenido en Kaggle</Text>
          <Image source={require('../assets/nnkaggle.jpeg')}
          className='h-[20px] w-[370px] rounded self-center'/>
          <Text className='my-3 text-sm text-justify text-fuchsia-200'>En este caso si se compara con el algoritmo de Random Forest, se tuvo mejor presición en la plataforma Kaggle. No obstante, decidimos quedarnos con el otro algoritmo por razones que se describen en la sección de selección de algoritmo. Los datos de la base de datos fueron analizados y tratados antes de entrenar el modelo. El trabajo se puede consultar en los siguientes enlaces.</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://colab.research.google.com/drive/1naWsMmvnty6hw97H6UizBRdYYq9c9WDA?usp=sharing')}
          className='m-2 p-2 border-2 border-[#AF00CC] rounded-full'>
            <Text className='text-white text-center'>Enlace Coolab</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL('https://drive.google.com/file/d/1Jx8LZ6rHS_nI_aA1erKHUO4Ct26m8j6D/view?usp=sharing')}
          className='m-2 p-2 border-2 border-[#AF00CC] rounded-full'>
            <Text className='text-white text-center'>Enlace CSV</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}