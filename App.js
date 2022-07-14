import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import store from './redux/store';

import { Provider } from 'react-redux';
import TodoScreen from './screens/TodoScreen';
import TabScreen from './screens/TabScreen';

export default function App() {

  return (
    <Provider store={store}>
       <NavigationContainer>
          <TabScreen />
       </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
