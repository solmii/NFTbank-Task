import React, { useState } from 'react';
import styld from 'styled-components';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { theme } from '../../Styles/theme';

const ChampItem = ({ champ, specifyActiveChamp, setIsActive, isActive }) => {
  const { champId, numOfPlays, champImg } = champ;

  const handleChampBtn = () => {
    specifyActiveChamp(champId);
    setIsActive(champId);
  };

  return (
    <TouchableOpacity onPress={handleChampBtn} style={styles.champItemBox}>
      {isActive === champId ? (
        <Text style={styles.champItemTextActive}>{numOfPlays} Games</Text>
      ) : (
        <Text style={styles.champItemText}>{numOfPlays}</Text>
      )}
      <Image
        style={isActive === champId ? styles.champItemImgActive : styles.champItemImg}
        source={{ uri: champImg }}
      />
    </TouchableOpacity>
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
  champItemTextActive: {
    marginBottom: 5,
    fontSize: 12,
    color: theme.mainBlue,
  },
  champItemImg: {
    marginHorizontal: 5,
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  champItemImgActive: {
    marginHorizontal: 5,
    width: 48,
    height: 48,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: theme.mainBlue,
  },
});

export default ChampItem;
