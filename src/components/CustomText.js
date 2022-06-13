import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RobotoRegular} from '../config/fonts';

const CustomText = props => {
  const {text, style} = props;

  return (
    <View>
      <Text style={[styles.defaultText, style]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: RobotoRegular,
  },
});

export default CustomText;
