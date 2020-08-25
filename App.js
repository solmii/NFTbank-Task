import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import UserForm from './src/Components/UserForm';
import ChampSelectBar from './src/Components/ChampSelectBar/ChampSelectBar';

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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
