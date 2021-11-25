/* eslint-disable react-native/no-color-literals */
import * as React from "react"
import { StyleSheet, View } from "react-native"
import { Text } from ".."
import { TxKeyPath } from "../../i18n"
import { color, spacing } from "../../theme"

interface Props {
  titleTx: string
  valueTextColor?: string
  value?: string
  marginBottom?: boolean
}

export function InformationLabel({ titleTx, valueTextColor, value, marginBottom }: Props) {
  return (
    <View style={[localStyles.container, marginBottom && localStyles.marginBottom]}>
      <Text style={localStyles.name} tx={titleTx as TxKeyPath}></Text>
      <Text style={[localStyles.status, { color: valueTextColor || color.palette.white }]}>
        {value}
      </Text>
    </View>
  )
}

const localStyles = StyleSheet.create({
  container: {
    borderColor: color.palette.white,
  },
  marginBottom: {
    marginBottom: spacing[3],
  },

  name: {
    color: color.palette.white,
    fontWeight: "bold",
    marginBottom: spacing[1],
  },
  status: {
    color: color.palette.white,
  },
})
