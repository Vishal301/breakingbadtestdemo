import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderSearch = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="search" size={28} color={'#FFFFFF'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default HeaderSearch;
