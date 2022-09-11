import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Screen_Alg1 from './screens/Screen_Alg1';
import Screen_Alg2 from './screens/Screen_Alg2;'
import { Provider } from 'react-redux';
import { store } from './store';
import FirstScreen from './screens/FirstScreen';
import SelectionScreen from './screens/SelectionScreen';
import DevelopersScreen from './screens/DevelopersScreen';
import PredictionScreen from './screens/PredictionScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name='First' component={FirstScreen}/>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Screen_Alg1' component={Screen_Alg1}/>
            <Stack.Screen name='Screen_Alg2' component={Screen_Alg2}/>
            <Stack.Screen name='SelectionScreen' component={SelectionScreen}/>
            <Stack.Screen name='DevelopersScreen' component={DevelopersScreen}/>
            <Stack.Screen name='PredictionScreen' component={PredictionScreen}/>
            

            

            
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
    );
}
