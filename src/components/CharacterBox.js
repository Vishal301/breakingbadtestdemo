import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import CustomText from './CustomText';
import FastImage from 'react-native-fast-image';
import {white} from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CharacterBox = props => {
  const {item, index} = props;

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
        <TouchableOpacity>
          <Icon
            name="favorite-border"
            solid={false}
            size={30}
            color="#3D3D3D"
          />
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
    fontWeight: '700',
    fontSize: 16,
  },
  nickNameText: {
    color: white,
    fontSize: 14,
  },
});

export default CharacterBox;
