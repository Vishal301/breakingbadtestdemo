import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {lightGreen} from '../config/colors';
import NavigationService from '../navigationServices/NavigationService';

const HeaderFavorite = props => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => NavigationService.navigate('FavoriteScreen')}>
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
