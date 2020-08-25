import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { theme } from '../Styles/theme';

const ChampScore = () => {
  // const { userName, userTier } = data;

  return (
    <View style={styles.champScore}>
      <View style={styles.currentChampBox}>
        <Image
          source={{ uri: 'https://menu.mt.co.kr/moneyweek/thumb/2019/12/13/06/2019121312598062451_1.jpg' }}
          style={styles.champImg}
        />

        <View style={styles.champInfoBox}>
          <Text style={styles.champInfoName}>Garen</Text>
          <Text style={styles.champInfoTier}>Gold 3</Text>
        </View>
      </View>

      <View style={styles.champRateBox}>
        <View style={styles.champRateItem}>
          <Text style={styles.champRateItemTitle}>Win %</Text>
          <Text style={styles.champRateItemValue}>39.8%</Text>
        </View>
        <View style={styles.champRateItem}>
          <Text style={styles.champRateItemTitle}>KDA</Text>
          <Text style={styles.champRateItemValue}>2.54:1</Text>
        </View>
      </View>

      <Text style={styles.champScoreTitle}>Champ Score</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: theme.mainBlue, paddingRight: 20 }}>
          <ColorChip fillColor={theme.mainBlue} /> Muntary
        </Text>
        <Text style={{ color: theme.mediumGray }}>
          <ColorChip fillColor={theme.mediumGray} /> Tier Avg
        </Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scoreCategory}>
        <View style={styles.scoreCategoryItem}>
          <Text style={styles.scoreCategoryTitle}>Champ Score</Text>
          <Text style={{ color: theme.mainBlue, fontSize: 28, fontWeight: 'bold' }}>23.0</Text>
        </View>

        <View style={styles.scoreCategoryItem}>
          <View>
            <Text style={styles.scoreCategoryTitle}>KDA</Text>
          </View>
          <View>
            <Text style={styles.scoreCategoryValue}>1.93</Text>
            <Text style={styles.scoreCategoryAvg}>2.31</Text>
          </View>
        </View>

        <View style={styles.scoreCategoryItem}>
          <View>
            <Text style={styles.scoreCategoryTitle}>KDA</Text>
          </View>
          <View>
            <Text style={styles.scoreCategoryValue}>1.93</Text>
            <Text style={styles.scoreCategoryAvg}>2.31</Text>
          </View>
        </View>

        <View style={styles.scoreCategoryItem}>
          <View>
            <Text style={styles.scoreCategoryTitle}>KDA</Text>
          </View>
          <View>
            <Text style={styles.scoreCategoryValue}>1.93</Text>
            <Text style={styles.scoreCategoryAvg}>2.31</Text>
          </View>
        </View>
      </ScrollView>

      <View style={{ height: 250, backgroundColor: 'pink' }}>
        <Text>차트 들어올 자리</Text>
      </View>

      <View style={styles.recommendGameTextBox}>
        <Text style={styles.recommendGameText}>"Let's try another game besides LOL"</Text>
      </View>

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
  width: 10;
  height: 10;
  background-color: ${(props) => props.fillColor};
`;
