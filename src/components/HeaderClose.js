import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../navigationServices/NavigationService';

const HeaderClose = props => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => NavigationService.navigate('HomeScreen')}>
      <Icon name="close" size={28} color={'#FFFFFF'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default HeaderClose;
