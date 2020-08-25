/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { theme } from '../Styles/theme';

const UserForm = ({ data }) => {
  const { userName, userTier, userLevel } = data;

  const getFormatDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
  };
  const now = getFormatDate();

  return (
    <View style={styles.userForm}>
      <View style={{ position: 'relative' }}>
        <View style={styles.userLevel}>
          <Text style={styles.levelText}>{userLevel}</Text>
        </View>
        <Image
          source={{ uri: 'https://menu.mt.co.kr/moneyweek/thumb/2019/12/13/06/2019121312598062451_1.jpg' }}
          style={styles.userIcon}
        />
      </View>

      <View style={styles.userInfoBox}>
        <Text style={styles.userIdText}>{userName}'s</Text>
        <Text style={styles.scoreText}>Champion Scorecard</Text>
        <View style={styles.tierInfoBox}>
          <Text style={{ color: theme.mediumGray }}>{userTier}</Text>
          <Text style={{ color: theme.mediumGray }}>{now} data</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: theme.rightGray,
  },
  userLevel: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 50,
    backgroundColor: 'black',
    zIndex: 2,
  },
  levelText: {
    fontSize: 10,
    color: '#fff',
  },
  userIcon: {
    width: 80,
    height: 80,
    borderRadius: 100 / 2,
  },
  userInfoBox: {
    width: 220,
  },
  userIdText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  scoreText: {
    fontSize: 22,
  },
  tierInfoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default UserForm;
