/* eslint-disable react-native/no-color-literals */
import * as React from "react"
import { Image, StyleSheet, View } from "react-native"
import {
  Text,
} from ".."
import { Character } from "../../models/character/character"

interface Props {
  character: Character
}

export function CharacterRowItem({character}: Props) {
  return (
    <View style={localStyles.container}>
      <View style={localStyles.avatarContainer}>
      <Image
        source={{uri: character.image}}
        resizeMode='contain'
        style={localStyles.image}
      />
      </View>
      <View style={localStyles.textContainer}>
          <Text>{character.name}</Text>
          <Text>{character.status}</Text>
      </View>
    </View>
  )
}

const localStyles = StyleSheet.create({
  avatarContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  textContainer: {
    flex: 4
  }
});