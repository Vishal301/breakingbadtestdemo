import React, {useLayoutEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDebouncedCallback} from 'use-debounce';
import {searchCharacters} from '../../apiServices/homeServices';
import CharacterBox from '../../components/CharacterBox';
import CustomText from '../../components/CustomText';
import {lightBlack, lightGreen, white} from '../../config/colors';
import {RobotoRegular} from '../../config/fonts';
import globalStyles from '../../config/globalStyles';

const SearchScreen = props => {
  const {navigation} = props;
  const [searchData, setSearchData] = useState([]);
  const [tmpText, setTmpText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: white,
      headerBackTitleVisible: false,
      headerTitleAlign: 'left',
      headerStyle: {
        backgroundColor: lightBlack,
      },
      headerLeft: () => (
        <HeaderSearchInput changeSearch={text => changeSearch(text)} />
      ),
    });
  }, [navigation]);

  const changeSearch = useDebouncedCallback(text => {
    setTmpText(text);
    if (text === '') {
      setSearchData([]);
      return;
    }
    setIsLoading(true);
    searchCharacters(`?name=${text}`)
      .then(res => {
        setIsLoading(false);
        setSearchData(res);
      })
      .catch(err => {
        setIsLoading(false);
        setSearchData([]);
      });
  }, 700);

  const HeaderSearchInput = ({changeSearch}) => {
    const [searchText, setSearchText] = useState('');

    return (
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="arrow-back" size={30} color={white} />
        </TouchableOpacity>
        <View>
          <TextInput
            placeholder="Search"
            style={styles.inputStyles}
            placeholderTextColor={'#ABABAB'}
            autoCapitalize="none"
            autoCorrect={false}
            value={searchText}
            autoFocus={true}
            onChangeText={text => {
              setSearchText(text);
              changeSearch(text);
            }}
            clearButtonMode={'always'}
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
    );
  };

  const EmptyList = () => {
    if (tmpText && !isLoading) {
      return (
        <View>
          <CustomText
            text="No character found"
            style={styles.noCharacterText}
          />
          <CustomText text="Try Again" style={styles.tryAgainText} />
        </View>
      );
    }
    return null;
  };

  return (
    <View style={globalStyles.pageContainer}>
      <FlatList
        data={searchData}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={item => <CharacterBox {...item} />}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={() => <EmptyList />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  inputStyles: {
    fontFamily: RobotoRegular,
    color: white,
    fontSize: 30,
    fontWeight: '100',
    paddingLeft: 10,
    width: wp(85),
  },
  listContainer: {
    marginLeft: wp(5),
    paddingVertical: 20,
  },
  noCharacterText: {
    fontSize: 24,
    color: lightGreen,
  },
  tryAgainText: {
    fontSize: 24,
    color: '#C4C4C4',
    marginTop: 5,
  },
});

export default SearchScreen;
