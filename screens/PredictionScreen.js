import { View, Text, Button, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {TextInput} from 'react-native-paper'
import { Formik } from 'formik'
import axios from 'axios'
import { useState } from 'react'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { Dropdown } from 'react-native-element-dropdown';
import SelectList from 'react-native-dropdown-select-list'

export default function PredictionScreen() {

  const [prediction, setPrediction] = useState('')
  const navigation = useNavigation();

  const [selected, setSelected] = useState('')
  const [sex,setSex] = useState('')
  const [model,setModel] = useState('')

  const data=[
    {key:'0', value:'mr'},
    {key:'2', value:'mrs'},
    {key:'1', value:'miss'},
    {key:'3', value:'master'},
    {key:'4', value:'VIP'},
  ]

  const data_sex=[
    {key:'0', value:'male'},
    {key:'1', value:'female'},
  ]

  const datalink=[
    {key:'RF', value:'Random Forest'},
    {key:'NN', value:'Neural Networks'},
  ]

  const linkdict = {
    'RF' : 'Random Forest',
    'NN' : 'Neural Networks',
    '' : '(Select model first)'
  }

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
            <Text className='text-lg font-bold text-center text-gray-50'>{linkdict[model]} Prediction</Text>
          </View>
          <TouchableOpacity onPress={navigation.goBack} 
            className='absolute top-6 left-5 p-2 bg-gray-900 border border-solid border-purple-600 rounded-full'>
              <ArrowLeftIcon size={20} color='#AF00CC'/>
          </TouchableOpacity>
        </View>
      </View>
      <Formik initialValues = {{
        Sex: '',
        Title:'',
        Age: '',
        Fare: '',
        Relatives: ''
        }}
        //onSubmit={values => console.log(values)}
        onSubmit={values => 
          axios.post('http://10.48.186.242:5000/predict'+model,{
            Sex: values.Sex,
            Title: values.Title,
            Age: values.Age,
            Fare: values.Fare,
            Relatives: values.Relatives,
          }).then(response => {setPrediction(response.data)}).catch(error => {console.log(error.response.data)})}

      >
        {({handleChange,handleBlur, handleSubmit, values})=> (
          <View>  
            <View>
            <SelectList 
                data={datalink} 
                setSelected={setModel}
                boxStyles={{backgroundColor: 'black'}}
                dropdownTextStyles={{color:'#AF00CC'}}
                boxTextSyles={{color:'#AF00CC'}}
                inputStyles={{color:'#AF00CC'}}
                placeholder='Select your model'
                />
            <SelectList 
                data={data_sex} 
                setSelected={setSex}
                boxStyles={{backgroundColor: 'black'}}
                dropdownTextStyles={{color:'#AF00CC'}}
                boxTextSyles={{color:'#AF00CC'}}

                inputStyles={{color:'#AF00CC'}}
                placeholder='Select your gender'
                onSelect={()=>{values.Sex = sex}}
                />
              <SelectList 
                data={data} 
                setSelected={setSelected}
                boxStyles={{backgroundColor: 'black'}}
                dropdownTextStyles={{color:'#AF00CC'}}
                boxTextSyles={{color:'#AF00CC'}}

                inputStyles={{color:'#AF00CC'}}
                placeholder='Select your title'
                onSelect={()=>{values.Title = selected}}
                />
            </View>
            <TextInput className='bg-gray-800'
              onChangeText = {handleChange('Age')}
              onBlur={handleBlur('Age')}
              value = {values.Age}
              placeholder = 'Age'
              placeholderTextColor={'#AF00CC'}
              theme={{colors:{text:'#E381C7'}}}
              keyboardType='numeric'
              enablesReturnKeyAutomatically={true}
              keyboardAppearance='dark'
              maxLength={2}
              returnKeyType='done'
            />
            <TextInput className='bg-gray-700'
              onChangeText = {handleChange('Fare')}
              onBlur={handleBlur('Fare')}
              value = {values.Fare}
              placeholder = 'Fare'
              placeholderTextColor={'#AF00CC'}
              theme={{colors:{text:'#E381C7'}}}
              keyboardType='numeric'
              enablesReturnKeyAutomatically={true}
              keyboardAppearance='dark'
              maxLength={3}
              returnKeyType='done'
            />
            <TextInput className='bg-gray-800'
              onChangeText = {handleChange('Relatives')}
              onBlur={handleBlur('Relatives')}
              value = {values.Relatives}
              placeholder = 'Relatives'
              placeholderTextColor={'#AF00CC'}
              theme={{colors:{text:'#E381C7'}}}
              keyboardType='numeric'
              enablesReturnKeyAutomatically={true}
              keyboardAppearance='dark'
              returnKeyType='done'
              maxLength={2}
            />
            <Button onPress={handleSubmit} title='Submit' color={'#AF00CC'}/>


            <Text className='text-xl text-fuchsia-200'>{prediction}</Text>
          </View>
        ) }
      </Formik> 
    </SafeAreaView>
  )
} 