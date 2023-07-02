import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar, Text } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Finger } from "./renderers";
import { MoveFinger } from "./systems"
import { Colors } from '../../theme/color';

export default class Game extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[MoveFinger]}
        entities={{
          1: { position: [40, 270], renderer: <Finger /> }, //-- Notice that each entity has a unique id (required)
          2: { position: [100, 270], renderer: <Finger /> }, //-- and a renderer property (optional). If no renderer
          3: { position: [160, 270], renderer: <Finger /> }, //-- is supplied with the entity - it won't get displayed.
          4: { position: [220, 270], renderer: <Finger /> },
          5: { position: [280, 270], renderer: <Finger /> }
        }}>

        {/* <StatusBar hidden={true} /> */}
        <StatusBar backgroundColor={Colors.PRIMARY_2} barStyle="light-content" />
        <Text style={{ color: Colors.PRIMARY_2, fontWeight: '500', fontSize: 22, textAlign: 'center', paddingTop: 80, width: '70%', alignSelf: 'center' }}>
          Hold with Two fingers on Screen to start the Game
        </Text>

      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  }
});
