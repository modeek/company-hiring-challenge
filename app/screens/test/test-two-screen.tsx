import React, { FC } from "react"
import { View, StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import {
  Header,
  Text,
  Screen,
} from "../../components"
import { NavigatorParamList } from "../../navigators"
import { color, spacing } from "../../theme"


export const TestTwoScreen: FC<StackScreenProps<NavigatorParamList, "testTwo">> = observer(
  ({ navigation }) => {
    const goBack = () => {console.warn('todo: implement back handler')}

    return (
      <View testID="DemoScreen" style={localStyles.full}>
        <Screen style={localStyles.container} preset="scroll" backgroundColor={color.transparent}>
          <Header
            headerTx="testScreenTwo.title"
            leftIcon="back"
            onLeftPress={goBack}
            style={localStyles.header}
            titleStyle={localStyles.headerTitle}
          />
          <Text style={localStyles.title} preset="header" tx="testScreenTwo.title" />
          <Text style={localStyles.tagline} tx="testScreenTwo.text" />
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
  header: {
    color: color.text,
    paddingBottom: spacing[5] - 1,
    paddingHorizontal: 0,
    paddingTop: spacing[3],
  },
  headerTitle: {
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1.5,
    lineHeight: 15,
    textAlign: "center",
  },
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
