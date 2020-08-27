import React from 'react';
import { StyleSheet, View } from 'react-native';
import Plotly from 'react-native-plotly';
import { theme } from '../../Styles/theme';

const ChampScoreChart = ({ champScoreData, averageScoreData }) => {
  const champScoreTitles = Object.keys(champScoreData).reverse();
  const champScores = Object.values(champScoreData).reverse();
  const averageScoreValues = Object.values(averageScoreData).reverse();

  // user score를 avg score 기준으로 백분율로 치환
  const getUserScore = (userArr, avgArr) => {
    let result = [];

    for (let i in avgArr) {
      result.push((+userArr[i] / +avgArr[i]) * 100);
    }
    return result;
  };

  const userScoreArr = getUserScore(champScores, averageScoreValues);
  const avgScoreArr = [100, 100, 100, 100, 100, 100, 100];

  // chart config
  const data = [
    {
      name: 'userGroup',
      type: 'scatterpolar',
      r: [...userScoreArr, userScoreArr[0]],
      theta: [...champScoreTitles, champScoreTitles[0]],
      fill: 'none',
      mode: 'lines',
      line: {
        color: theme.mainBlue,
      },
    },
    {
      name: 'avgGroup',
      type: 'scatterpolar',
      r: avgScoreArr,
      theta: [...champScoreTitles, champScoreTitles[0]],
      fill: 'none',
      mode: 'lines',
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
        showline: false,
        ticklen: 0,
      },
      angularaxis: {
        rotation: 210,
        color: '#eee',
        ticklen: 0,
        tickfont: {
          color: '#888',
          size: 13,
        },
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
