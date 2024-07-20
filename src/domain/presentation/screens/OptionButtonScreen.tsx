import React from 'react';
import { View } from 'react-native';
import { styles } from '../../../config/theme/app-theme';
import { OptionButtonComponent } from '../components/OptionButtonComponent';

export const OptionButtonScreen = () => {
  return (
    <View style={styles.optionButtonContainer}>
      <OptionButtonComponent label="Historial" />
      <OptionButtonComponent label="AI" />
    </View>
  );
};
