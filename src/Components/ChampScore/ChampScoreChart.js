import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styled from 'styled-components';
import Plotly from 'react-native-plotly';
import { theme } from '../../Styles/theme';

const ChampScoreChart = ({ champScoreData, averageScoreData }) => {
  const champScoreTitles = Object.keys(champScoreData).reverse();
  const champScores = Object.values(champScoreData).reverse();
  const averageScoreValues = Object.values(averageScoreData).reverse();

  const getUserScore = (userArr, avgArr) => {
    let result = [];

    for (let i in avgArr) {
      result.push((+userArr[i] / +avgArr[i]) * 100);
    }
    return result;
  };

  const userScoreArr = getUserScore(champScores, averageScoreValues);
  const avgArr = [100, 100, 100, 100, 100, 100, 100];

  const data = [
    {
      type: 'scatterpolar',
      name: 'userGroup',
      r: [...userScoreArr, userScoreArr[0]],
      theta: [...champScoreTitles, champScoreTitles[0]],
      fill: 'none',
      mode: 'lines',
      hoverlabel: {
        bgcolor: theme.rightGray,
        bordercolor: theme.mainBlue,
      },
      line: {
        color: theme.mainBlue,
      },
    },
    {
      type: 'scatterpolar',
      name: 'avgGroup',
      r: avgArr,
      theta: [...champScoreTitles, champScoreTitles[0]],
      fill: 'none',
      mode: 'lines',
      hoverlabel: {
        bgcolor: theme.rightGray,
        bordercolor: theme.mainBlue,
      },
      line: {
        color: theme.mediumGray,
      },
    },
  ];

  const layout = {
    height: 320,
    margin: {
      l: 0,
      r: 0,
      t: 20,
      d: 0,
    },
    legend: {
      bordercolor: theme.mediumGray,
    },
    polar: {
      radialaxis: {
        visible: true,
        range: [0, 200],
        rangemode: 'nomal',
        color: theme.mediumGray,
        showticklabels: false,
        ticklen: 0,
        showline: false,
      },
      angularaxis: {
        rotation: 210,
        color: theme.mediumGray,
      },
      gridshape: 'linear',
    },
    showlegend: false,
  };

  return (
    <View style={styles.champScoreChartForm}>
      <Plotly data={data} layout={layout} debug enableFullPlotly />
    </View>
  );
};

const styles = StyleSheet.create({
  champScoreChartForm: {
    flex: 1,
    height: 280,
    marginTop: 20,
    backgroundColor: 'white',
  },
  radarChart: {
    zIndex: 10,
  },
});

export default ChampScoreChart;
