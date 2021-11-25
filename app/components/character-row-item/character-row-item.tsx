/* eslint-disable react-native/no-color-literals */
import * as React from "react"
import { Image, StyleSheet, View } from "react-native"
import { Text } from ".."
import { Character } from "../../models/character/character"
import { color, spacing } from "../../theme"

interface Props {
  character: Character
}

export function CharacterRowItem({ character }: Props) {
  const showBorder = character.status !== "unknown" ? 3 : 0
  const selectionColor = color[character.status.toLowerCase()]

  return (
    <View style={localStyles.container}>
      <View
        style={[
          localStyles.avatarContainer,
          {
            borderWidth: showBorder,
            borderColor: selectionColor,
          },
        ]}
      >
        <Image source={{ uri: character.image }} resizeMode="contain" style={localStyles.image} />
      </View>
      <View style={localStyles.textContainer}>
        <Text style={localStyles.name}>{character.name}</Text>
        <Text style={localStyles.status}>{character.status}</Text>
      </View>
    </View>
  )
}

const localStyles = StyleSheet.create({
  avatarContainer: {
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: spacing[3],
    padding: 3,
    width: 60,
  },

  container: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    aspectRatio: 1,
    borderRadius: 25,
    width: "100%",
  },

  name: {
    color: color.palette.white,
    fontWeight: "bold",
  },
  status: {
    color: color.palette.white,
  },

  textContainer: {
    flex: 4,
    justifyContent: "center",
  },
})
