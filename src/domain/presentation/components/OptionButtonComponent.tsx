import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from '../../../config/theme/app-theme';

interface OptionButtonComponentProps {
    label: string;
};


export const OptionButtonComponent = ({
    label="Option",
}:OptionButtonComponentProps) => {
  return (
    <Pressable
      style={styles.optionButton}>
      <Text style={styles.textOptionButton}>{ label }</Text>
    </Pressable>
  );
};
