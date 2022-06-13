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
import SearchScreen from './src/screens/Search/SearchScreen';
import NavigationService from './src/navigationServices/NavigationService';
import {StatusBar, View} from 'react-native';
import globalStyles from './src/config/globalStyles';

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
    <View style={globalStyles.pageContainer}>
      <StatusBar barStyle={'light-content'} />

      <NavigationContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}>
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
          <Stack.Screen
            options={{
              ...defaultHeaderOptions,
              headerTitle: '',
            }}
            name="SearchScreen"
            component={SearchScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
