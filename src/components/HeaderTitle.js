import React from 'react';
import {StyleSheet, View} from 'react-native';
import {white} from '../config/colors';
import CustomText from './CustomText';

const HeaderTitle = props => {
  const {titleText, style} = props;
  return (
    <View>
      <CustomText text={titleText} style={[styles.defaultTitleText, style]} />
    </View>
  );
};

const styles = StyleSheet.create({
  defaultTitleText: {
    color: white,
    fontWeight: '700',
    fontSize: 23,
  },
});

export default HeaderTitle;
