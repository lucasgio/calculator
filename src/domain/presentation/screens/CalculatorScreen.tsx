import React from 'react';
import {Text, View} from 'react-native';
import {colors, styles} from '../../../config/theme/app-theme';
import {useCalculator} from '../hooks/useCalculator';
import {ButtonComponent} from '../components/ButtonComponent';

export const CalculatorScreen = () => {
  const {
    operation,
    number,
    previous,
    buildNumber,
    resetValues,
    deleteNumber,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    arithmeticOperation
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      

      <View style={styles.resultContainer}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>
          {operation}
        </Text>
        <Text style={styles.subResult}>{(previous === '0') ? ' ': previous}</Text>
      </View>

      <View>
        <View style={styles.buttonContainer}>
          <ButtonComponent onPress={() => resetValues()} label="C" />
          <ButtonComponent onPress={() => console.log('+/-')} label="+/-" />
          <ButtonComponent onPress={() => deleteNumber()} label="del" />
          <ButtonComponent
            onPress={() => subtractOperation}
            label="-"
            color={colors.darkOrange}
          />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonComponent onPress={() => buildNumber('7')} label="7" />
          <ButtonComponent onPress={() => buildNumber('8')} label="8" />
          <ButtonComponent onPress={() => buildNumber('9')} label="9" />
          <ButtonComponent
            onPress={() => addOperation()}
            label="+"
            color={colors.darkOrange}
          />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonComponent onPress={() => buildNumber('5')} label="5" />
          <ButtonComponent onPress={() => buildNumber('6')} label="6" />
          <ButtonComponent onPress={() => buildNumber('7')} label="7" />
          <ButtonComponent
            onPress={() => divideOperation()}
            label="/"
            color={colors.darkOrange}
          />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonComponent onPress={() => buildNumber('1')} label="1" />
          <ButtonComponent onPress={() => buildNumber('2')} label="2" />
          <ButtonComponent onPress={() => buildNumber('3')} label="3" />
          <ButtonComponent
            onPress={() => multiplyOperation()}
            label="x"
            color={colors.darkOrange}
          />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonComponent
            onPress={() => buildNumber('0')}
            label="0"
            width={180}
          />
          <ButtonComponent onPress={() => buildNumber('.')} label="." />
          <ButtonComponent
            onPress={() => arithmeticOperation()}
            label="="
            color={colors.darkOrange}
          />
        </View>
      </View>
    </View>
  );
};
