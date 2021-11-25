import React, { FC, useEffect } from "react"
import { StyleSheet, View, Image, FlatList, Pressable } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { Text, Screen, Header, CharacterRowItem } from "../../components"
import { NavigatorParamList, Routes } from "../../navigators"
import { color, spacing } from "../../theme"
import { useStores } from "../../models"
import { Character } from "../../models/character/character"
import { LinearGradient } from "expo-linear-gradient"

export const TestScreen: FC<StackScreenProps<NavigatorParamList, Routes.CharacterList>> = observer(
  ({ navigation }) => {
    const { characterStore } = useStores()

    // here's the data
    const characters = characterStore.characters

    useEffect(() => {
      const fetchCharacters = async () => {
        try {
          await characterStore.getCharacters()
        } catch (e) {}
      }

      fetchCharacters()
    }, [])

    const showCharacterPage = (character: Character) => {
      navigation.push(Routes.CharacterDetails, {
        characterId: character.id,
      })
    }

    return (
      <LinearGradient
        {...color.backgroundLinearGradient}
        testID="DemoScreen"
        style={localStyles.full}
      >
        <Screen style={localStyles.container} preset="fixed" backgroundColor={color.transparent}>
          <Header
            headerTx="testScreen.title"
            style={localStyles.header}
            titleStyle={localStyles.headerTitle}
          />
          <Image
            source={require("../../assets/header.png")}
            resizeMode="contain"
            style={localStyles.headerImage}
          />
          <Text style={localStyles.helperText} tx="testScreen.helperText" />
          {characters && (
            <FlatList
              style={localStyles.characterList}
              data={characters}
              renderItem={({ item }) => (
                <Pressable onPress={() => showCharacterPage(item as Character)}>
                  <CharacterRowItem character={item as Character} />
                </Pressable>
              )}
              keyExtractor={(item) => (item.id as unknown) as string}
              ItemSeparatorComponent={() => <View style={localStyles.itemSpacing} />}
            />
          )}
        </Screen>
      </LinearGradient>
    )
  },
)

const localStyles = StyleSheet.create({
  characterList: { marginBottom: spacing[2], width: "100%" },

  container: {
    alignItems: "center",
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
  headerImage: {
    aspectRatio: 2,
    height: null,
    resizeMode: "contain",
    width: "80%",
  },
  headerTitle: {
    color: color.palette.white,
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1.5,
    lineHeight: 15,
    textAlign: "center",
  },

  helperText: {
    color: color.palette.white,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: spacing[4] + spacing[1],
    textAlign: "center",
  },

  itemSpacing: {
    height: spacing[3],
  },
})
