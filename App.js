/**
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StyleSheet, ScrollView, StatusBar } from 'react-native';
import UserForm from './src/Components/UserForm';
import ChampSelectBar from './src/Components/ChampSelectBar/ChampSelectBar';
import ChampCounter from './src/Components/ChampCounter/ChampCounter';
import ChampScore from './src/Components/ChampScore/ChampScore';
import { theme } from './src/Styles/theme';
import * as userInfo from './src/data/userInfo.json';
import * as averageScoreListData from './src/data/averageScore.json';

const App = () => {
  const userData = userInfo.userInfo;
  const averageScoreData = averageScoreListData.averageScoreListData;
  const preferredChampData = userInfo.userInfo.preferredChamp;

  const [isActiveChamp, setIsActiveChamp] = useState(0);

  const specifyActiveChamp = (champId) => {
    setIsActiveChamp(champId);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.container}>
        <UserForm userInfo={userData} />
        <ChampSelectBar
          preferredChamp={preferredChampData}
          specifyActiveChamp={specifyActiveChamp}
        />
        <ChampScore
          selectedChampScore={preferredChampData[isActiveChamp]}
          averageScore={averageScoreData[isActiveChamp]}
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
