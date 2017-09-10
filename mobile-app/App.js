// Exported from snack.expo.io
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  Alert,
  StatusBar,
} from 'react-native';
import { Constants } from 'expo';
import {Emoji} from 'react-native-emoji' // 1.2.0
const giphy_key = 'xxxxx';

var tag_list = [
  'putty',
  'fidget',
  'fidget%20spinner',
  'satisfying',
  'kinetic%20sand',
  'slime',
  'fidget%20cube',
  'pottery',
  'paint%20mixing',
  'oobleck',
  'corgi',
  'puppy',
  'cat',
  'kitten',
  'bunny',
  'golden%20retriever',
  'mesmerizing',
  'shiba',
  'cats',
  'corgis',
  'dog',
  'dogs',
  'bunnies',
  'geometry',
  'breathing%20exercise',
  'perfect%20loop',
];

export default class App extends Component {
  state = {
    result: {}, // we will put data about the user here
  };

  _handleYesButtonPress = () => {
    //Alert.alert('Great to hear!', "We'll show you more GIFs like this.");
    var newtag = tag_list[0];
    console.log(tag_list);
    tag_list.splice(0, 1);
    tag_list.push(newtag);
    console.log(tag_list);
    //his._renderResult();
    //this.setState({result: ''});
    this._handleGiphyCall();
    this.forceUpdate();
    //this._renderResult();
  };
  _handleNoButtonPress = () => {
    console.log(tag_list);
    tag_list.splice(0, 1);
    console.log(tag_list);
    //this.setState({result: ''});
    this._handleGiphyCall();
    this.forceUpdate();
  };

  _handleButtonPress = () => {
    Alert.alert(
      'About this app',
      "MyCalm is an app that can help you manage your anxiety levels with calming GIFs. Unlike most anxiety management tools, this app is based around what calms you down. If a GIF isn't calming you down, you can give the app that feedback and it'll try its best to find something that works with you. No preaching or quackery involved!"
    );
  };

  componentDidMount() {
    this._handleGiphyCall();
    return;
  }
  /*componentDidMount() {
    fetch(
      'http://api.giphy.com/v1/gifs/random?tag=' +
        tag_list[0] +
        '&api_key=' +
        giphy_key +
        '&rating=g'
    ).then(function(response) {
      console.log(JSON.parse(response));
      srcgif = JSON.parse(response).data.image_url;
    });

    return 1;
  }*/
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="dark-content" />
        <Text style={styles.title}>MyCalm</Text>

        {this._renderResult()}

        <View style={styles.container3}>
          <Text style={styles.paragraph}>
              Did that help?
            </Text>
        </View>
        <View style={styles.container2}>
          <View style={styles.buttonContainer}>
            <Button title="Yes" onPress={this._handleYesButtonPress} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="No" onPress={this._handleNoButtonPress} />
          </View>
        </View>

        <Button title="About this app" onPress={this._handleButtonPress} />

      </View>
    );
  }

  _renderResult = () => {
    return (
      <View style={styles.container2}>
        <Image
          source={{ uri: this.state.result }}
          style={{ height: 250, width: 300 }}
        />
      </View>
    );
  };

  _handleGiphyCall = async event => {
    const response = await fetch(
      'http://api.giphy.com/v1/gifs/random?tag=' +
        tag_list[0] +
        '&api_key=' +
        giphy_key +
        '&rating=g'
    );
    const res = await response.json();
    console.log(res.data.image_url);
    this.setState({ result: res.data.image_url });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  title: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
    marginBottom: 30,
  },

  container2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    marginTop: 60,
  },
  buttonContainer: {
    marginTop: 60,
    flex: 1,
    padding: 5,
  },
});
