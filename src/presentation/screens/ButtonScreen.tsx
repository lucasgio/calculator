import React from 'react'
import { View } from 'react-native'
import { styles, colors } from '../../config/theme/app-theme'
import { ButtonComponent } from '../components/ButtonComponent'

export const ButtonScreen = () => {
  return (
    <View>
        <View style={styles.buttonContainer}>
        <ButtonComponent label="C" />
        <ButtonComponent label="+/-" />
        <ButtonComponent label="del" />
        <ButtonComponent label="-" color={colors.darkOrange} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent label="7" />
        <ButtonComponent label="8" />
        <ButtonComponent label="9" />
        <ButtonComponent label="+" color={colors.darkOrange} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent label="5" />
        <ButtonComponent label="6" />
        <ButtonComponent label="7" />
        <ButtonComponent label="/" color={colors.darkOrange} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent label="1" />
        <ButtonComponent label="2" />
        <ButtonComponent label="3" />
        <ButtonComponent label="x" color={colors.darkOrange} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent label="0" width={180} />
        <ButtonComponent label="." />
        <ButtonComponent label="=" color={colors.darkOrange} />
      </View>
    </View>
  )
}
