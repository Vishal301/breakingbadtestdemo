/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {View, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {fetchAllCharacters} from '../../apiServices/homeServices';
import CharacterBox from '../../components/CharacterBox';
import globalStyles from '../../config/globalStyles';

const HomeScreen = () => {
  const [charactersList, setCharactersList] = useState([]);

  useEffect(() => {
    fetchAllCharacters()
      .then(res => {
        if (res.length) {
          setCharactersList(res);
        }
      })
      .catch(err => {});
  }, []);

  return (
    <View style={globalStyles.pageContainer}>
      <SafeAreaView />
      <FlatList
        data={charactersList}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={item => <CharacterBox {...item} />}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginLeft: wp(5),
    paddingVertical: 20,
  },
});

export default HomeScreen;
