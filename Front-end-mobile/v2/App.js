import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App: () => Node = () => {
  return (
    <View>
      <SafeAreaView>
        <View>
          <Text>teste</Text>
        </View>
      </SafeAreaView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: '#ffff',
  },
});

export default App;
