import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChampCounterItem from './ChampCounterItem';
import { theme } from '../../Styles/theme';

const ChampCounter = ({ selectedChampCounter }) => {
  const { champName, counterChampData } = selectedChampCounter;

  return (
    <View style={styles.champCounter}>
      <Text style={styles.champCounterTitle}>
        My{' '}
        <Text
          style={{
            color: theme.mainBlue,
          }}>
          {champName}
        </Text>
        's Counters
      </Text>

      {counterChampData.map((champ) => (
        <ChampCounterItem key={champ.counterChampId} champ={champ} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  champCounter: {
    flex: 1,
    marginBottom: 14,
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },
  champCounterTitle: {
    marginBottom: 10,
    fontSize: 24,
  },
  counterChampBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ChampCounter;
