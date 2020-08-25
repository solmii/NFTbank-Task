import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import UserForm from './src/Components/UserForm';
import ChampSelectBar from './src/Components/ChampSelectBar/ChampSelectBar';
import ChampScore from './src/Components/ChampScore';
import ChampCounter from './src/Components/ChampCounter/ChampCounter';
import { theme } from './src/Styles/theme';

const userData = {
  userName: 'solmii',
  userTier: 'Gold 3',
  userLevel: 76,
};

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <UserForm data={userData} />
      <ChampSelectBar />
      <ChampScore />
      <ChampCounter />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.rightGray,
  },
});

export default App;
