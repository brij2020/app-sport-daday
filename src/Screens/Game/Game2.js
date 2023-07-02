import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, Dimensions, View, Text } from "react-native";
import { GameLoop } from "react-native-game-engine";
import { Colors } from '../../theme/color';

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const RADIUS = 25;

export default class Game2 extends PureComponent {
    constructor() {
        super();
        this.state = {
            x: WIDTH / 2 - RADIUS,
            y: HEIGHT / 2 - RADIUS
        };
    }

    updateHandler = ({ touches, screen, layout, time }) => {
        let move = touches.find(x => x.type === "move");
        if (move) {
            this.setState({
                x: this.state.x + move.delta.pageX,
                y: this.state.y + move.delta.pageY
            });
        }
    };

    render() {
        return (
            <GameLoop style={styles.container} onUpdate={this.updateHandler}>
                <View style={[styles.player, { left: this.state.x, top: this.state.y }]} />
                <Text style={{ color: Colors.PRIMARY_2, fontWeight: '500', fontSize: 22, textAlign: 'center', paddingTop: 80, width: '70%', alignSelf: 'center' }}>
                    Hold with a fingers on Screen to start the Game
                </Text>
            </GameLoop>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    player: {
        position: "absolute",
        backgroundColor: "pink",
        width: RADIUS * 2,
        height: RADIUS * 2,
        borderRadius: RADIUS * 2
    }
});
