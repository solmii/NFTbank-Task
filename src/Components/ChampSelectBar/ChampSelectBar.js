import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ChampItem from './ChampItem';
import { theme } from '../../Styles/theme';

const ChampSelectBar = ({ preferredChamp, specifyActiveChamp }) => {
  const [isActive, setIsActive] = useState(0);

  return (
    <View style={styles.champSeletBar}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {preferredChamp.map((champ) => (
          <ChampItem
            key={champ.champId}
            champ={champ}
            specifyActiveChamp={specifyActiveChamp}
            setIsActive={setIsActive}
            isActive={isActive}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  champSeletBar: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: theme.rightGray,
  },
});

export default ChampSelectBar;
