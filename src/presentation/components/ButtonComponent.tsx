import React from 'react';
import {Pressable, Text} from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';


interface ButtonComponentProps {

    label:string;
    color?:string;
    width?:number;
    height?:number;
    

}


export const ButtonComponent = ({
    label,
    color = colors.gray,
    width = styles.button.width,
    height = styles.button.height
}:ButtonComponentProps) => {
  return (
    <Pressable onPress={() => {}} style={({ pressed }) => ({
       ...styles.button, 
        backgroundColor: color,
        width,
        height,
        opacity: pressed ? 0.4 : 1
    })}>
      <Text style={styles.colorTextButton}>{ label }</Text>
    </Pressable>
  );
};
