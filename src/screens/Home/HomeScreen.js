/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAllCharacters} from '../../apiServices/homeServices';
import CharacterBox from '../../components/CharacterBox';
import globalStyles from '../../config/globalStyles';
import {setCharacterList} from '../../redux/Actions/characterListAction';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const {charactersList} = useSelector(state => state.charactersList);
  useEffect(() => {
    fetchAllCharacters()
      .then(res => {
        if (res.length) {
          let tmpArr = res;
          tmpArr.forEach(item => {
            item.isLiked = false;
          });
          dispatch(setCharacterList(Object.assign([], tmpArr)));
        }
      })
      .catch(err => {});
  }, []);

  return (
    <View style={globalStyles.pageContainer}>
      <FlatList
        data={charactersList}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={item => <CharacterBox {...item} />}
        contentContainerStyle={globalStyles.listContainer}
      />
    </View>
  );
};

export default HomeScreen;
