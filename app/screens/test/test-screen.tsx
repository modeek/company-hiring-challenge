import React, { FC } from "react"
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import {
  Text,
  Screen,
} from "../../components"
import { NavigatorParamList } from "../../navigators"
import { color, spacing } from "../../theme"
import { useStores } from "../../models"

export const TestScreen: FC<StackScreenProps<NavigatorParamList, "test">> = observer(() => {
    const {characterStore} = useStores();

    // here's the data
    const characters = characterStore.characters;

    console.warn(characters)

    return (
      <View testID="DemoScreen" style={localStyles.full}>
        <Screen style={localStyles.container} preset="scroll" backgroundColor={color.background}>
          <Text style={localStyles.title} preset="header" tx="testScreen.title" />
          <Text style={localStyles.tagline} tx="testScreen.text" />
        </Screen>
      </View>
    )
  },
)

const localStyles = StyleSheet.create({
  bold: { fontWeight: "bold" },
  container: {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[4],
  },
  full: { flex: 1 },
  tagline: {
    color: color.text,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: spacing[4] + spacing[1],
  },
  title: {
    color: color.text,
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 38,
    marginBottom: spacing[5],
    textAlign: "center",
  }
});