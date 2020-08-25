/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import ChampScoreCategory from './ChampScoreCategory';
import ChampScoreChart from './ChampScoreChart';
import { theme } from '../../Styles/theme';

const ChampScore = ({ selectedChampScore, averageScore, userName }) => {
  const {
    champName,
    champImg,
    champTier,
    winningRate,
    champScore,
    champScore: { KDA },
  } = selectedChampScore;
  const { averageScoreValue } = averageScore;

  const [isActiveCategory, setIsActiveCategory] = useState('Score');
  const [isActive, setIsActive] = useState('Score');

  // Champ Score 카테고리 클릭시 ActiveCategory, IsActive 상태 저장
  const specifyActiveCategory = (categoryTitle) => {
    setIsActiveCategory(categoryTitle);
    setIsActive(categoryTitle);
  };

  return (
    <View style={styles.champScore}>
      <View style={styles.currentChampBox}>
        <Image source={{ uri: champImg }} style={styles.champImg} />

        <View style={styles.champInfoBox}>
          <Text style={styles.champInfoName}>{champName}</Text>
          <Text style={styles.champInfoTier}>{champTier} Tier</Text>
        </View>
      </View>

      <View style={styles.champRateBox}>
        <View style={styles.champRateItem}>
          <Text style={styles.champRateItemTitle}>Win %</Text>
          <Text style={styles.champRateItemValue}>{winningRate}%</Text>
        </View>
        <View style={styles.champRateItem}>
          <Text style={styles.champRateItemTitle}>KDA</Text>
          <Text style={styles.champRateItemValue}>{KDA}:1</Text>
        </View>
      </View>

      <Text style={styles.champScoreTitle}>Champ Score</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: theme.mainBlue, paddingRight: 20 }}>
          <ColorChip style={styles.colorChip} fillColor={theme.mainBlue} /> {userName}
        </Text>
        <Text style={{ color: theme.mediumGray }}>
          <ColorChip style={styles.colorChip} fillColor={theme.mediumGray} /> Tier Avg
        </Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scoreCategory}>
        {Object.keys(champScore).map((category) => (
          <ChampScoreCategory
            key={category}
            title={category}
            isActive={isActive}
            champScoreData={champScore}
            averageScoreData={averageScoreValue}
            specifyActiveCategory={specifyActiveCategory}
          />
        ))}
      </ScrollView>

      {/* <View style={{ height: 250, backgroundColor: 'pink' }}>
        <Text>차트 들어올 자리</Text>
        <Text>{champScore[isActiveCategory]}</Text>
      </View> */}
      <ChampScoreChart activeCategoryScore={champScore[isActiveCategory]} />

      <TouchableOpacity style={styles.recommendGameTextBox}>
        <Text style={styles.recommendGameText}>"Let's try another game besides LOL"</Text>
      </TouchableOpacity>

      <View style={styles.buttonForm}>
        <TouchableOpacity
          style={{
            width: '49%',
            marginVertical: 5,
            paddingVertical: 14,
            borderRadius: 6,
            backgroundColor: theme.mainGreen,
          }}>
          <Text style={styles.buttonText}>PERF Rank</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '49%',
            marginVertical: 5,
            paddingVertical: 14,
            borderRadius: 6,
            backgroundColor: theme.mainBlue,
          }}>
          <Text style={styles.buttonText}>Champion Rec</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  champScore: {
    flex: 1,
    marginBottom: 14,
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },
  currentChampBox: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  champImg: {
    width: 66,
    height: 66,
    marginRight: 10,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: theme.mainGreen,
  },
  champInfoName: {
    paddingBottom: 6,
    fontSize: 24,
    fontWeight: 'bold',
  },
  champInfoTier: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.mainGreen,
  },
  champRateBox: {
    flexDirection: 'row',
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: theme.rightGray,
  },
  champRateItem: {
    width: '50%',
    padding: 20,
  },
  champRateItemTitle: {
    paddingBottom: 6,
    fontSize: 12,
    color: theme.mediumGray,
  },
  champRateItemValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  champScoreTitle: {
    marginBottom: 10,
    fontSize: 24,
  },
  scoreCategory: {
    maxHeight: 130,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: theme.mediumGray,
    borderRadius: 5,
  },
  colorChip: {
    width: 10,
    height: 10,
  },
  scoreCategoryItem: {
    justifyContent: 'space-between',
    width: 120,
    padding: 14,
    borderRightWidth: 1,
    borderRightColor: theme.mediumGray,
  },
  scoreCategoryTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  scoreCategoryValue: {
    color: theme.mainBlue,
    fontSize: 20,
  },
  scoreCategoryAvg: {
    color: 'gray',
  },
  recommendGameTextBox: {
    marginVertical: 10,
    paddingVertical: 14,
    borderRadius: 6,
    backgroundColor: theme.paleBlue,
  },
  recommendGameText: {
    fontWeight: 'bold',
    color: theme.mainBlue,
    textAlign: 'center',
  },
  buttonForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ChampScore;

const ColorChip = styled.View`
  background-color: ${(props) => props.fillColor};
`;
