/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { theme } from '../../Styles/theme';

const ChampCounterItem = ({ champ }) => {
  const { counterChampName, counterChampImg, numOfPlays, numOfWins, numOfDefeats } = champ;

  const getChampRate = () => {
    let result = (numOfWins / (numOfWins + numOfDefeats)) * 100;
    if (result % 1 !== 0) {
      result = result.toFixed(1);
    }
    return result;
  };

  return (
    <View style={styles.champCounterItem}>
      <View style={styles.champCounterImgBox}>
        <Image style={styles.champCounterImg} source={{ uri: counterChampImg }} />
        <View
          style={{
            marginLeft: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            {counterChampName}
          </Text>
          <Text
            style={{
              marginTop: 6,
              color: theme.mediumGray,
            }}>
            {numOfPlays} Games
          </Text>
        </View>
      </View>

      <View>
        <View style={styles.champCounterText}>
          <Text style={styles.champCounterTextTitle}>Opponent stats</Text>
          <Text
            style={{
              marginTop: 6,
              fontSize: 16,
            }}>
            {numOfWins}W {numOfDefeats}L{' '}
            <Text
              style={{
                color: theme.rateRed,
              }}>
              ({getChampRate()}%)
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  champCounterItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  champCounterImgBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  champCounterImg: {
    marginHorizontal: 5,
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  champCounterText: {
    alignItems: 'flex-end',
  },
  champCounterTextTitle: {
    fontWeight: 'bold',
    color: theme.mediumGray,
  },
});

export default ChampCounterItem;
