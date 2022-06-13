/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home/HomeScreen';
import {themeBlack, white} from './src/config/colors';
import HeaderTitle from './src/components/HeaderTitle';
import HomeHeaderRight from './src/components/HomeHeaderRight';

const Stack = createNativeStackNavigator();

const defaultHeaderOptions = {
  headerTintColor: white,
  headerBackTitleVisible: false,
  headerTitleAlign: 'left',
  headerStyle: {
    backgroundColor: themeBlack,
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            ...defaultHeaderOptions,
            headerTitle: '',
            headerLeft: () => <HeaderTitle titleText="The Breaking bad" />,
            headerRight: () => <HomeHeaderRight />,
          }}
          name="HomeScreen"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
