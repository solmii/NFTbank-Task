import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { theme } from '../../Styles/theme';

const ChampItem = ({ champ }) => {
  const [isActive, setIsActive] = useState(false); // 썸네일 클릭시 파란색 테두리 생기면서 강조

  return (
    <View style={styles.champItemBox} onClick={() => setIsActive(!isActive)}>
      <Text style={styles.champItemText}>{champ.numOfPlays}</Text>
      <Image style={styles.champItemImg} source={{ uri: champ.champImg }} />
    </View>
  );
};

const styles = StyleSheet.create({
  champItemBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  champItemText: {
    marginBottom: 5,
    fontSize: 12,
    color: theme.mediumGray,
  },
  champItemImg: {
    marginHorizontal: 5,
    width: 48,
    height: 48,
    borderRadius: 50,
  },
});

export default ChampItem;
