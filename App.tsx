import React, { useState } from 'react';

import {

  StyleSheet,
  Vibration,
  View,

} from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import { addTodo,removeTodo,updateTodo } from './redux/reducers/todo/todoSlice';
import { persistor, store } from './redux/store';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import { PersistGate } from 'redux-persist/integration/react';


function App(): React.JSX.Element {
 
  
  return (
    <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
      <View style={styles.Container}>
        <AddTodo />
        <Todos />
        </View>
        </PersistGate>

    </Provider>
  );
}

const styles = StyleSheet.create({

  Container:{
    flex:1,
    backgroundColor:'#2E3440',
    alignItems:'center',
    
  },
});

export default App;
