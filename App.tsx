import React from 'react';
import {View} from 'react-native';
import {CalculatorScreen} from './src/presentation/screens/CalculatorScreen';
import { styles } from './src/config/theme/app-theme';

export const App = () => {
  return (
    <View style={ styles.background } >
      <CalculatorScreen />
    </View>
  );
};
