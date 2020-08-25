import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
// import NavBar from './src/Components/NavBar';
import UserForm from './src/Components/UserForm';
import ChampSelectBar from './src/Components/ChampSelectBar/ChampSelectBar';
import ChampScore from './src/Components/ChampScore';
import ChampCounter from './src/Components/ChampCounter/ChampCounter';
import * as userInfo from './src/data/userInfo.json';
import { theme } from './src/Styles/theme';

const App = () => {
  const userData = userInfo.userInfo;
  const preferredChampData = userInfo.userInfo.preferredChamp;

  return (
    <>
      {/* <NavBar /> */}
      <ScrollView style={styles.container}>
        <UserForm userInfo={userData} />
        <ChampSelectBar />
        <ChampScore />
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
