import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../config/theme/app-theme';

export const ResultScreen = () => {
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.mainResult}>1500</Text>
      <Text style={styles.subResult}>50</Text>
    </View>
  );
};
