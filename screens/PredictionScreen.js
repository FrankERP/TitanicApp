import { View, Text, Button, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {TextInput} from 'react-native-paper'
import { Formik } from 'formik'
import axios from 'axios'
import { useState } from 'react'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

export default function PredictionScreen() {

  const [prediction, setPrediction] = useState('')
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
            <Text className='text-lg font-bold text-center text-gray-50'>Prediction Screen</Text>
          </View>
          <TouchableOpacity onPress={navigation.goBack} 
            className='absolute top-6 left-5 p-2 bg-gray-900 border border-solid border-purple-600 rounded-full'>
              <ArrowLeftIcon size={20} color='#AF00CC'/>
          </TouchableOpacity>
        </View>
      </View>
      <Formik initialValues = {{
        sepalLength: '',
        sepalWidth:'',
        petalLength: '',
        petalWidth: ''
        }}
        //onSubmit={values => console.log(values)}
        onSubmit={values => 
          axios.post('http://10.48.187.54:5000/predict',{
            sepalLength: values.sepalLength,
            sepalWidth: values.sepalWidth,
            petalLength: values.petalLength,
            petalWidth: values.petalWidth,
          }).then(response => {setPrediction(response.data)}).catch(error => {console.log(error)})}

      >
        {({handleChange,handleBlur, handleSubmit, values})=> (
          <View>
            <TextInput className='bg-gray-800'
              onChangeText = {handleChange('sepalLength')}
              onBlur={handleBlur('sepalLength')}
              vaue = {values.sepalLength}
              placeholder = 'sepalLength'
              placeholderTextColor={'#AF00CC'}
              theme={{colors:{text:'#E381C7'}}}
            />
            <TextInput className='bg-gray-700'
              onChangeText = {handleChange('sepalWidth')}
              onBlur={handleBlur('sepalWidth')}
              vaue = {values.sepalWidth}
              placeholder = 'sepalWidth'
              placeholderTextColor={'#AF00CC'}
              theme={{colors:{text:'#E381C7'}}}
            />
            <TextInput className='bg-gray-800'
              onChangeText = {handleChange('petalLength')}
              onBlur={handleBlur('petalLength')}
              vaue = {values.petalLength}
              placeholder = 'petalLength'
              placeholderTextColor={'#AF00CC'}
              theme={{colors:{text:'#E381C7'}}}
            />
            <TextInput className='bg-gray-700 text-fuchsia-200'
              onChangeText = {handleChange('petalWidth')}
              onBlur={handleBlur('petalWidth')}
              vaue = {values.petalWidth}
              placeholder = 'petalWidth'
              placeholderTextColor={'#AF00CC'}
              theme={{colors:{text:'#E381C7'}}}
            />
            <Button onPress={handleSubmit} title='Submit' color={'#AF00CC'}/>

            <Text className='text-xl text-fuchsia-200'>The Prediction is: {prediction}</Text>
          </View>
        ) }
      </Formik>
    </SafeAreaView>
  )
}