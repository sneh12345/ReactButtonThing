import { Audio } from 'expo-av';
import * as React from 'react';
import { Text, View, Button } from 'react-native';

class SoundButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri:
          'https://sneh12345.github.io/ReactButtonThing/y2mate.com%20-%20Tory%20Lanez%20x%20Pressa%20%20Canada%20Goose%20Clean%20Version_360p.mp4',
      },

      { shouldPlay: true }
    );
  };

  render() {
    return <Button title="Canada Goose" color="blue" onPress={this.playSound} />;
  }
}

class SoundButton2 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri:
          "https://sneh12345.github.io/ReactButtonThing/Hawk%20em'.mp4",
      },

      { shouldPlay: true }
    );
  };

  render() {
    return(
    <View style = {{ marginTop: 100 }}>
    <Button title="Hawk em'" color="red" onPress={this.playSound} />
    </View>
    );
  }
}

class SoundButton3 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri:
          "https://sneh12345.github.io/ReactButtonThing/Switchin'%20lanes.mp4",
      },

      { shouldPlay: true }
    );
  };

  render() {
    return(
    <View style = {{ marginTop: 100 }}>
    <Button title="Switchin' Lanes" color="red" onPress={this.playSound} />
    </View>
    );
  }
}

class SoundButton4 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri:
          "https://sneh12345.github.io/ReactButtonThing/Man%20Screaming%20Sound%20Effect%20(READ%20DESC%20for%20MP3_FORM).mp4",
      },

      { shouldPlay: true }
    );
  };

  render() {
    return(
    <View style = {{ marginTop: 100 }}>
    <Button title="Play a sound" color="red" onPress={this.playSound} />
    </View>
    );
  }
}



export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 100, marginLeft: 10, marginRight: 10 }}>
        <SoundButton />
        <SoundButton2 />
        <SoundButton3 />
        <SoundButton4 />
        <Text style={{marginTop: -350, fontSize: 25, textAlign: 'center'}}>My DJ MUSIC Application!</Text>
      </View>
    );
  }
}


//https://sneh12345.github.io/ReactButtonThing/Switchin'%20lanes.mp4