import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import CustomText from './CustomText';
import FastImage from 'react-native-fast-image';
import {lightGreen, white} from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {setCharacterList} from '../redux/Actions/characterListAction';

const CharacterBox = props => {
  const dispatch = useDispatch();
  const {item, index} = props;
  const {charactersList} = useSelector(state => state.charactersList);

  const likeDislike = char_id => {
    const index = charactersList.findIndex(item => item.char_id === char_id);
    let newArray = charactersList;
    newArray[index].isLiked = !newArray[index].isLiked;
    dispatch(setCharacterList(Object.assign([], newArray)));
  };

  return (
    <View key={index} style={styles.boxContainer}>
      <FastImage
        style={styles.userImage}
        source={{
          uri: item.img,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />

      <View style={styles.desContainer}>
        <View>
          <CustomText
            text={item.name}
            numberOfLines={1}
            style={styles.nameText}
          />
          <CustomText
            text={item.nickname}
            numberOfLines={1}
            style={styles.nickNameText}
          />
        </View>
        <TouchableOpacity onPress={() => likeDislike(item.char_id)}>
          {item.isLiked ? (
            <Icon name="favorite" size={30} color={lightGreen} />
          ) : (
            <Icon name="favorite-border" size={30} color="#3D3D3D" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    width: wp(42),
    marginRight: wp(5),
    marginBottom: 15,
    padding: 10,
    alignItems: 'center',
  },
  userImage: {
    height: wp(50),
    width: wp(40),
    borderRadius: 7,
  },
  desContainer: {
    width: wp(40),
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameText: {
    color: white,
    width: wp(40) - 30,
    fontWeight: '700',
    fontSize: 16,
  },
  nickNameText: {
    color: white,
    fontSize: 14,
  },
});

export default CharacterBox;
