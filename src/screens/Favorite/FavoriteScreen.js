import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import CharacterBox from '../../components/CharacterBox';
import CustomText from '../../components/CustomText';
import globalStyles from '../../config/globalStyles';

const FavoriteScreen = props => {
  const {charactersList} = useSelector(state => state.charactersList);
  const [favoriteData, setFavoriteData] = useState([]);

  useEffect(() => {
    let tmpList = charactersList.filter(item => item.isLiked === true);
    setFavoriteData(Object.assign([], tmpList));
  }, [charactersList]);

  const EmptyList = () => {
    return (
      <View style={styles.emptyContainer}>
        <CustomText text="No favourites" style={styles.tryAgainText} />
      </View>
    );
  };

  return (
    <View style={globalStyles.pageContainer}>
      <FlatList
        data={favoriteData}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={item => <CharacterBox {...item} />}
        contentContainerStyle={globalStyles.listContainer}
        ListEmptyComponent={() => <EmptyList />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(70),
  },
  tryAgainText: {
    fontSize: 24,
    color: '#C4C4C4',
    marginTop: 5,
  },
});

export default FavoriteScreen;
