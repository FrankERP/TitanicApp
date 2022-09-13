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
      <ScrollView>
        <View>
          <Text>Se decidió utilizar Random Forest(RF) ya que es de facil interpretación pues se basa en votación lo que minimiza los errores, es rapido de entrenar y rectifica el problema de sobreajuste en los árboles de desición. Aunado a esto, es robusto cuando en los datos encontramos valores atípicos y proporcionar selección automática de características.</Text>
          <Text>Los resultados obtenidos al entrenar el modelo no fueron los mejores, sin embargo, al utilizar diferentes categorías fuimos obteniendo un mejor porcentaje de precisión. No obstante, en la plataforma Kaggle se obtuvo un menor porcentaje que en nuestro archivo Coolab.</Text>
          <Text>Presición Obtenida </Text>
          <Text> </Text>
          <Image source={require('../assets/rfres.jpg')}/>
          <Text>Matriz de confusión </Text>
          <Text>Se observa en la Matriz que los altos valores en la diagonal nos indica un modelo robusto, con las dos clases que se usaron donde los valores posibles son 1 y 0.</Text>
          <Image source={require('../assets/RF_Matriz.png')}/>
          <Text>ROC y AUC</Text>
          <Text>Sabemos que la medida de la matriz no es suficiente para decidir que tan bueno es el modelo, por lo que en la parte de abajo vemos que la curva ROC en azul, sube a un ritmo cercano de tasa positiva cercano a la esquina izquierda. El área bajo la curva (AUC) es de 0.83 lo que nos da un nivel de alta sensitividad y alta especificidad.  </Text>
          <Image source={require('../assets/RF_ROC_y_AUC.png')}/>
          <Text>Puntake obtenido en Kaggle</Text>
          <Image />
          <Text>Los datos de la base de datos fueron analizados y tratados antes de entrenar el modelo. El trabajo se puede consultar en el siguiente enlace.</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://colab.research.google.com/drive/1naWsMmvnty6hw97H6UizBRdYYq9c9WDA?usp=sharing')}>
            <Text className='text-white'>Enlace al archivo Coolab.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}