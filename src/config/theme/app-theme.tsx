import {StyleSheet} from 'react-native';

export const colors = {
  darkGray: '#2D2D2D',
  lightGray: '#a6a6a6',
  orange: '#FF9500',
  darkOrange: '#FF6B00',
  white: '#FFFFFF',
  black: '#000000',
  blue: '#007AFF',
  green: '#4CD964',
  red: '#FF3B30',
  yellow: '#FFCC00',
  pink: '#FF2D55',
  purple: '#5856D6',
  teal: '#5AC8FA',
  indigo: '#5856D6',
  gray: '#8E8E93',
  lightBlue: '#5AC8FA',
  lightGreen: '#34C759',
  lightRed: '#FF453A',
  lightYellow: '#FFD60A',
  lightPink: '#FF2D55',
  lightPurple: '#AF52DE',
  lightTeal: '#64D2FF',
  lightIndigo: '#5E5CE6',
  calculatorBackground: '#000',
  calculatorText: '#E0E0E0',
  calculatorButtonPressed: '#d4d4d4',
  calculatorButtonHighlighted: '#C8C8C8',
};

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.calculatorBackground,
  },

  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },

  resultContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },

  mainResult: {
    fontSize: 70,
    color: colors.calculatorText,
    textAlign: 'right',
  },

  subResult: {
    fontSize: 30,
    color: colors.calculatorText,
    textAlign: 'right',
  },

  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 18,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },

  button: {
    borderRadius: 100,
    height: 80,
    width: 80,
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },

  colorTextButton: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'semibold',
  },

  optionButtonContainer: {
    flexDirection: 'row',
    padding: 10,
    top: 80,
    backgroundColor: colors.calculatorBackground,
  },

  textOptionButton: {
    color: colors.white,
    fontWeight: 'bold',
  },
  optionButton: {
    backgroundColor: colors.darkOrange,
    padding: 10,
    width: 100,
    alignItems: 'center',
    borderRadius: 100,
    marginHorizontal: 10,
  },
});
