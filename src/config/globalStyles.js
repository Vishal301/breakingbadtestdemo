import React from 'react';
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {themeBlack} from './colors';

const globalStyles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: themeBlack,
  },
  listContainer: {
    marginLeft: wp(5),
    paddingVertical: 20,
  },
});

export default globalStyles;
