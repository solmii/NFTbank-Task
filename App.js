import React, { useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
// import NavBar from './src/Components/NavBar';
import UserForm from './src/Components/UserForm';
import ChampSelectBar from './src/Components/ChampSelectBar/ChampSelectBar';
import ChampScore from './src/Components/ChampScore/ChampScore';
import ChampCounter from './src/Components/ChampCounter/ChampCounter';
import * as userInfo from './src/data/userInfo.json';
import * as averageScoreListData from './src/data/averageScore.json';
import { theme } from './src/Styles/theme';

const App = () => {
  const userData = userInfo.userInfo;
  const preferredChampData = userInfo.userInfo.preferredChamp;

  const [isActiveChamp, setIsActiveChamp] = useState(0);

  // isActiveChamp를 인자로 받은 champId로 세팅
  const specifyActiveChamp = (champId) => {
    setIsActiveChamp(champId);
  };

  return (
    <>
      {/* <NavBar /> */}
      <ScrollView style={styles.container}>
        <UserForm userInfo={userData} />
        <ChampSelectBar preferredChamp={preferredChampData} specifyActiveChamp={specifyActiveChamp} />
        <ChampScore
          selectedChampScore={preferredChampData[isActiveChamp]}
          averageScore={averageScoreListData.averageScoreListData[isActiveChamp]}
          userName={userData.userName}
        />
        <ChampCounter />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.rightGray,
  },
});

export default App;
