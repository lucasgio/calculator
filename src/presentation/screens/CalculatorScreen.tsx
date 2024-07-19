import React from 'react';
import { View } from 'react-native';
import { styles} from '../../config/theme/app-theme';
import { ButtonScreen } from './ButtonScreen';
import { ResultScreen } from './ResultScreen';
import { OptionButtonScreen } from './OptionButtonScreen';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <OptionButtonScreen/>
      <ResultScreen/>
      <ButtonScreen/>
    </View>
  );
};
