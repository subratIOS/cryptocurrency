import 'react-native-gesture-handler';
import React from 'react';
import HomeStack from './routes/HomeStack';
import BottomTab from './routes/BottomTab'
import HocToBeUsed from './screens/withHOC';
import { NavigationContainer } from '@react-navigation/native';
import {createStore,} from 'redux';
import {Provider} from 'react-redux';
import {firstreducers} from './reducers/firstreducers';

export default function App() {

  const store = createStore(firstreducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return (
    <Provider store={store}>
      <NavigationContainer>
      <BottomTab></BottomTab>
      </NavigationContainer>

    </Provider>

  );
}
