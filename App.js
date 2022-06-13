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
import {lightGreen, themeBlack, white} from './src/config/colors';
import HeaderTitle from './src/components/HeaderTitle';
import HomeHeaderRight from './src/components/HomeHeaderRight';
import SearchScreen from './src/screens/Search/SearchScreen';
import NavigationService from './src/navigationServices/NavigationService';
import {StatusBar, StyleSheet, View} from 'react-native';
import globalStyles from './src/config/globalStyles';
import {configureStore} from './src/redux/store';
import {Provider} from 'react-redux';
import FavoriteScreen from './src/screens/Favorite/FavoriteScreen';
import HeaderClose from './src/components/HeaderClose';
import {RobotoBold} from './src/config/fonts';

const Stack = createNativeStackNavigator();

const defaultHeaderOptions = {
  headerTintColor: white,
  headerBackTitleVisible: false,
  headerTitleAlign: 'left',
  headerStyle: {
    backgroundColor: themeBlack,
  },
};

const store = configureStore();

const App = () => {
  return (
    <View style={globalStyles.pageContainer}>
      <StatusBar barStyle={'light-content'} />

      <Provider store={store}>
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
                headerLeft: () => (
                  <HeaderTitle
                    titleText="Favourites"
                    style={styles.favouriteTitleText}
                  />
                ),
                headerRight: () => <HeaderClose />,
              }}
              name="FavoriteScreen"
              component={FavoriteScreen}
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
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  favouriteTitleText: {
    fontFamily: RobotoBold,
    fontSize: 23,
    color: lightGreen,
  },
});
export default App;
