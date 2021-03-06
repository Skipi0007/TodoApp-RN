
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import * as Font from 'expo-font'
import {AppLoading} from 'expo-app-loading'

import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';
import { THEME } from './src/themes';


  Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })


export default function App() {
  const [isReady, setIsReady] =useState(false)
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    {id: '1', title: 'Learn React Native'}
  ])

  

  const addTodo = title => {
    setTodos(prev => [ ...prev,
      {
      id: Date.now().toString(),
      title: title
      }
    ])
  }

  const removeTodo = id => {
    const todo = todos.find(t => t.id === id)
    Alert.alert(
    'Delete item',
    `Are you sure to delete "${todo.title}"?`,
    [
      {
        text: 'Cancel',
        style: 'cancel'
      },

      { text: 'Delete',
        style: 'destructive',
        onPress: () => {
          setTodoId(null),
          setTodos(prev => prev.filter(todo => todo.id !== id))
        } 
      }
    ],
    { cancelable: false }
  );
    
  }

  const updateTodo = (id, title) => {
    setTodos(old => old.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    }))
  }

  let content = (
    <MainScreen  
      todos={todos} 
      addTodo={addTodo} 
      removeTodo={removeTodo} 
      openTodo={setTodoId}/>
  )

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = (
      <TodoScreen 
        onRemove={removeTodo} 
        goBack={() => setTodoId(null)} 
        todo={selectedTodo}
        onSave={updateTodo}
      />
    )
  }

  return (
    <View >
      <Navbar title = 'Navigation' />
      <View style={styles.container}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20

  },
});
