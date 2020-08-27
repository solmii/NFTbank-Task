/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { theme } from '../../Styles/theme';

const ChampScoreCategory = ({
  title,
  champScoreData,
  averageScoreData,
  setIsActiveCategory,
  isActive,
}) => {
  const categoryDescription = {
    Damage: 'Dmg / min',
    Vision: 'Avg. Vision Score',
    Suvival: 'Dmg taken / death',
    Growth: 'Golds+XP / min',
  };

  // 현재 선택된 탭 isActive와 props로 전달받은 title이 일치하는 상태
  const currentActive = isActive === title;

  return (
    <TouchableOpacity onPress={() => setIsActiveCategory(title)}>
      <CategoryBtnBox
        style={styles.scoreCategoryItem}
        currentActive={currentActive}>
        <View>
          <CategoryBtnTitle
            style={styles.scoreCategoryTitle}
            currentActive={currentActive}>
            {title}
          </CategoryBtnTitle>
          <Text style={styles.scoreAvgTitle}>{categoryDescription[title]}</Text>
        </View>
        <View>
          <CategoryBtnValue
            currentActive={currentActive}
            style={
              title === 'Score'
                ? styles.champScoreValue
                : styles.scoreCategoryValue
            }>
            {champScoreData[title]}
          </CategoryBtnValue>
          {title !== 'Score' && (
            <CategoryBtnAvgValue currentActive={currentActive}>
              {averageScoreData[title]}
            </CategoryBtnAvgValue>
          )}
        </View>
      </CategoryBtnBox>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  scoreCategoryItem: {
    justifyContent: 'space-between',
    width: 120,
    height: 120,
    padding: 15,
    borderRightWidth: 1,
    borderRightColor: theme.mediumGray,
  },
  scoreCategoryTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  scoreAvgTitle: {
    fontSize: 10,
    color: theme.mediumGray,
  },
  champScoreValue: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  scoreCategoryValue: {
    fontSize: 18,
    fontWeight: 'bold',
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

export default ChampScoreCategory;

const CategoryBtnBox = styled.View`
  background-color: ${(props) =>
    props.currentActive ? theme.mainBlue : 'white'};
`;

const CategoryBtnTitle = styled.Text`
  color: ${(props) => (props.currentActive ? 'white' : 'black')};
`;

const CategoryBtnValue = styled.Text`
  color: ${(props) => (props.currentActive ? 'white' : theme.mainBlue)};
`;

const CategoryBtnAvgValue = styled.Text`
  color: ${(props) => (props.currentActive ? theme.rightGray : '#888')};
`;
