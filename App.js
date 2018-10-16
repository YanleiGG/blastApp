import React, {Component} from 'react';
import Home from './components/Home'
import HoleIndex from './components/HoleIndex'
import BlastIndexDesign from './components/BlastIndexDesign'
import GridIndexDesign from './components/GridIndexDesign'
import HistoryRecords from './components/HistoryRecords'

import {
  createStackNavigator,
} from 'react-navigation';

const App = createStackNavigator({
  Home: { screen: Home },
  HoleIndex: { screen: HoleIndex },
  BlastIndexDesign: { screen: BlastIndexDesign },
  GridIndexDesign: { screen: GridIndexDesign },
  HistoryRecords: { screen: HistoryRecords }
});

export default App;
