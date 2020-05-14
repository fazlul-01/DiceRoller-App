import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dice1: require("./src/images/dice1.png"),
      dice2: require("./src/images/dice2.png"),
    };
  }

  getRandomValue = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  playButtonPressed = () => {
    //Alert.alert("Heyyyy: " + this.getRandomValue());
    var Dice1 = this.getRandomValue();
    var Dice2 = this.getRandomValue();

    switch (Dice1) {
      case 1:
        this.setState({ dice1: require("./src/images/dice1.png") });
        break;
      case 2:
        this.setState({ dice1: require("./src/images/dice2.png") });
        break;
      case 3:
        this.setState({ dice1: require("./src/images/dice3.png") });
        break;
      case 4:
        this.setState({ dice1: require("./src/images/dice4.png") });
        break;
      case 5:
        this.setState({ dice1: require("./src/images/dice5.png") });
        break;
      case 6:
        this.setState({ dice1: require("./src/images/dice6.png") });
        break;

      default:
        this.setState({ dice1: require("./src/images/dice1.png") });
        break;
    }
    switch (Dice2) {
      case 1:
        this.setState({ dice2: require("./src/images/dice1.png") });
        break;
      case 2:
        this.setState({ dice2: require("./src/images/dice2.png") });
        break;
      case 3:
        this.setState({ dice2: require("./src/images/dice3.png") });
        break;
      case 4:
        this.setState({ dice2: require("./src/images/dice4.png") });
        break;
      case 5:
        this.setState({ dice2: require("./src/images/dice5.png") });
        break;
      case 6:
        this.setState({ dice2: require("./src/images/dice6.png") });
        break;

      default:
        this.setState({ dice2: require("./src/images/dice1.png") });
        break;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={this.state.dice1} />
          <Image style={styles.image} source={this.state.dice2} />
        </View>

        <TouchableOpacity onPress={this.playButtonPressed}>
          <Text style={styles.gamebutton}>Play Game</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E74292",
    alignItems: "center",
    justifyContent: "center",
  },
  gamebutton: {
    marginTop: 35,
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 5,
    borderColor: "#FFF",
  },
  imageContainer: {
    flexDirection: "row",
  },
  image: {
    width: 150,
    height: 150,
  },
});
