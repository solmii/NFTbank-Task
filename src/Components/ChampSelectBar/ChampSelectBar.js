import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import ChampItem from './ChampItem';
import { theme } from '../../Styles/theme';
// json 데이터 불러온후에 지우기
import { userChampListData } from '../../data/userChampList';

const ChampSelectBar = () => {
  const [userChampList, setUserChampList] = useState([]);

  // const getUserData = async () => {
  //   try {
  //     const res = await axios.get('https://localhost:19002/data/userData.json').then((res) => res.json());
  //     console.log(res);
  //     return res.userData;
  //     // serUserData(res.userData);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    setUserChampList(userChampListData);
  }, []);

  return (
    <View style={styles.champSeletBar}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {userChampList.map((champ) => (
          <ChampItem key={champ.champId} champ={champ} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  champSeletBar: {
    flex: 1,
    // alignItems: 'center',
    maxHeight: 90,
    paddingHorizontal: 20,
    paddingBottom: 12,
    backgroundColor: theme.rightGray,
  },
});

export default ChampSelectBar;
