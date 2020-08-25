import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { theme } from '../Styles/theme';

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <Icon name="left" size={30} color={theme.mediumGray} />
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 80,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: theme.rightGray,
  },
});

export default NavBar;
