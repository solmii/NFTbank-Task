import React from 'react';
import styled from 'styled-components';
import { StyleSheet, Text, View } from 'react-native';
// import Plotly from 'plotly.js';
// import createPlotlyComponent from 'react-plotly.js/factory';
import { theme } from '../../Styles/theme';

const ChampScoreChart = ({ activeCategoryScore }) => {
  // const Plot = createPlotlyComponent(Plotly);

  return (
    <View style={styles.champScoreChartForm}>
      <Text>{activeCategoryScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  champScoreChartForm: {
    justifyContent: 'space-between',
    width: 120,
    height: 120,
    backgroundColor: 'pink',
  },
});

export default ChampScoreChart;
