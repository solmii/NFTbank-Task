import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import UserForm from './src/Components/UserForm';

const userData = {
  userName: 'solmii',
  userTier: 'Gold 3',
  userLevel: 76,
};

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <UserForm data={userData} />
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
