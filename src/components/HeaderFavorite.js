import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {lightGreen} from '../config/colors';

const HeaderFavorite = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="favorite" size={28} color={lightGreen} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default HeaderFavorite;
