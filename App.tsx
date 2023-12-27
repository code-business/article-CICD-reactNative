/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Linking, StyleSheet, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.view}>
      <Text style={styles.welcomeText}>
        Welcome to{' '}
        <Text
          style={{color: 'rgb(171, 91, 85)', textDecorationLine: 'underline'}}
          onPress={() => Linking.openURL('https://code-b.dev')}>
          CODEB
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 28,
  },
});

export default App;
