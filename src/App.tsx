import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import introGraphic from './images/open.png'

function Link(props) {
  return (
    <Text
      {...props}
      accessibilityRole="link"
      style={StyleSheet.compose(styles.link, props.style)}
    />
  );
}

function App() {
  return (
    <View style={styles.app}>
      <Image
        accessibilityLabel="Time Warm Intro Image"
        source={introGraphic}
        resizeMode="contain"
        style={styles.logo}
      />
      <Text style={styles.text}>
        This is an example of an app built with{" "}
        <Link href="https://github.com/facebook/create-react-app">
          Create React App
        </Link>{" "}
        and{" "}
        <Link href="https://github.com/necolas/react-native-web">
          React Native for Web
        </Link>
      </Text>
      <Text style={styles.text}>
        To get started, edit{" "}
        <Link href="https://codesandbox.io/s/q4qymyp2l6/" style={styles.code}>
          src/App.js
        </Link>
        .
      </Text>
      <Button onPress={() => {}} title="Example button" />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: 'rgb(59, 134, 209)',
    backgroundImage: 'linear-gradient(180deg, rgba(59,134,209,1) 0%, rgba(239,100,147,1) 100%)',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.35), 0 23px 20px 0 rgba(0, 0, 0, 0.19)',
    width: '85%',
    height: '85%',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row'
  },
  logo: {
    maxHeight: '100%',
    maxWidth: '75%',
    alignSelf: 'flex-end',
    width: 400,
    height: 400
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default App;
