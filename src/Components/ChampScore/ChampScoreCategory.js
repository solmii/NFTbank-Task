/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {theme} from '../../Styles/theme';

const ChampScoreCategory = ({
  title,
  champScoreData,
  averageScoreData,
  specifyActiveCategory,
  isActive,
}) => {
  const categoryDescription = {
    Damage: 'Dmg / min',
    Vision: 'Avg. Vision Score',
    Suvival: 'Dmg taken / death',
    Growth: 'Golds+XP / min',
  };

  // 현재 선택된 버튼 isActive와 props로 전달받은 title이 일치할 때
  const CurrentActive = isActive === title;

  return (
    <TouchableOpacity onPress={() => specifyActiveCategory(title)}>
      <CategoryBtnBox
        style={styles.scoreCategoryItem}
        CurrentActive={CurrentActive}>
        <View>
          <CategoryBtnTitle
            style={styles.scoreCategoryTitle}
            CurrentActive={CurrentActive}>
            {title}
          </CategoryBtnTitle>
          <Text style={styles.scoreAvgTitle}>{categoryDescription[title]}</Text>
        </View>
        <View>
          <CategoryBtnValue
            CurrentActive={CurrentActive}
            style={
              title === 'Score'
                ? styles.champScoreValue
                : styles.scoreCategoryValue
            }>
            {champScoreData[title]}
          </CategoryBtnValue>
          {title !== 'Score' && (
            <Text style={styles.scoreAvgValue}>{averageScoreData[title]}</Text>
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
  scoreAvgValue: {
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

export default ChampScoreCategory;

const CategoryBtnBox = styled.View`
  background-color: ${(props) =>
    props.CurrentActive ? theme.mainBlue : 'white'};
`;

const CategoryBtnTitle = styled.Text`
  color: ${(props) => (props.CurrentActive ? 'white' : 'black')};
`;

const CategoryBtnValue = styled.Text`
  color: ${(props) => (props.CurrentActive ? 'white' : theme.mainBlue)};
`;
