import React, { FC, useMemo } from "react"
import { Image, StyleSheet, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { Header, Text, Screen, InformationLabel } from "../../components"
import { NavigatorParamList, Routes } from "../../navigators"
import { color, spacing } from "../../theme"
import { LinearGradient } from "expo-linear-gradient"
import { useStores } from "../../models"

export const TestTwoScreen: FC<
  StackScreenProps<NavigatorParamList, Routes.CharacterDetails>
> = observer(({ navigation, route }) => {
  const goBack = () => {
    navigation.pop()
  }
  const { characterStore } = useStores()
  const characters = characterStore.characters

  const selectedCharacter = useMemo(
    () => characters.find((character) => character.id === route.params.characterId),
    [characters, route.params.characterId],
  )

  return (
    <LinearGradient
      {...color.backgroundLinearGradient}
      testID="DemoScreen"
      style={localStyles.full}
    >
      {selectedCharacter && <Screen style={localStyles.container} preset="scroll" backgroundColor={color.transparent}>
        <Header
          headerTx="testScreenTwo.title"
          leftIcon="back"
          onLeftPress={goBack}
          style={localStyles.header}
          titleStyle={localStyles.headerTitle}
        />

        <Image
          source={{ uri: selectedCharacter.image }}
          resizeMode="contain"
          style={localStyles.headerImage}
        />

        <Text style={localStyles.title}>{selectedCharacter.name}</Text>

        <View style={localStyles.informationBox}>
          <InformationLabel
            titleTx="testScreenTwo.status"
            value={selectedCharacter.status}
            valueTextColor={color[selectedCharacter.status.toLowerCase()]}
            marginBottom
          />
          <InformationLabel
            titleTx="testScreenTwo.location"
            value={selectedCharacter.location?.name}
            marginBottom
          />
          <InformationLabel
            titleTx="testScreenTwo.species"
            value={selectedCharacter.species}
            marginBottom
          />
          <InformationLabel titleTx="testScreenTwo.gender" value={selectedCharacter.gender} />
        </View>
      </Screen>}
    </LinearGradient>
  )
})

const localStyles = StyleSheet.create({
  bold: { fontWeight: "bold" },
  container: {
    alignItems: "center",
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[4],
  },
  full: { flex: 1 },
  header: {
    color: color.text,
    marginBottom: spacing[5],
    paddingBottom: spacing[5] - 1,
    paddingHorizontal: 0,
    paddingTop: spacing[3],
  },
  headerImage: {
    aspectRatio: 1,
    borderRadius: 30,
    marginBottom: spacing[6],
    resizeMode: "contain",
    width: "75%",
  },
  headerTitle: {
    color: color.palette.white,
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1.5,
    lineHeight: 15,
    textAlign: "center",
  },

  informationBox: {
    borderColor: color.palette.white,
    borderRadius: 20,
    borderWidth: 5,
    marginBottom: spacing[2],
    padding: spacing[4],
    width: "100%",
  },

  title: {
    color: color.palette.white,
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 38,
    marginBottom: spacing[6],
    textAlign: "center",
  },
})
