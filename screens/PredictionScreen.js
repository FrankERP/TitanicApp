import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import {TextInput} from 'react-native-paper'
import { Formik } from 'formik'
import axios from 'axios'
import { useState } from 'react'

export default function PredictionScreen() {

  const [prediction, setPrediction] = useState('')

  return (
    <SafeAreaView>
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
          <TextInput className='bg-gray-300'
            onChangeText = {handleChange('sepalLength')}
            onBlur={handleBlur('sepalLength')}
            vaue = {values.sepalLength}
            placeholder = 'sepalLength'
            placeholderTextColor={'#AF00CC'}
          />
          <TextInput className='bg-gray-400'
            onChangeText = {handleChange('sepalWidth')}
            onBlur={handleBlur('sepalWidth')}
            vaue = {values.sepalWidth}
            placeholder = 'sepalWidth'
            placeholderTextColor={'#AF00CC'}
          />
          <TextInput className='bg-gray-300'
            onChangeText = {handleChange('petalLength')}
            onBlur={handleBlur('petalLength')}
            vaue = {values.petalLength}
            placeholder = 'petalLength'
            placeholderTextColor={'#AF00CC'}
          />
          <TextInput className='bg-gray-400'
            onChangeText = {handleChange('petalWidth')}
            onBlur={handleBlur('petalWidth')}
            vaue = {values.petalWidth}
            placeholder = 'petalWidth'
            placeholderTextColor={'#AF00CC'}
          />
          <Button onPress={handleSubmit} title='Submit'/>

          <Text className='text-xl text-indigo-600'>The Prediction is: {prediction}</Text>
        </View>
      ) }
    </Formik>
    </SafeAreaView>
  )
}