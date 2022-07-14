import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../redux/actions/todoAction';

export default function TodoScreen() {

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo);
  
  const [ newTodo, setNewTodo ] = useState('');

  const saveTodo = () => {
    
    // dispatch({ 'type': 'ADD_TODO', 'payload': { id:  todos[todos.length-1].id + 1, title: newTodo} });
    dispatch(addTodo({ id:  todos[todos.length-1].id + 1, title: newTodo}))
  }

  const removeTodo = (id) => {
    // dispatch({ type: 'DELETE_TODO', payload: { id: id }})
    dispatch(deleteTodo({ id: id }))
  }

  const refresh = () => {
    dispatch({ type: 'FETCH_TODO'})
  }

  return (
    <SafeAreaView>
        <TouchableOpacity onPress={refresh}>
            <Text>REFRESH</Text>
        </TouchableOpacity>
        <ScrollView>
            { todos.map((todo) => (
                <View key={todo.id} style={{ flex: 1, flexDirection: 'row'}}>
                    <Text>{todo.id}. {todo.title}</Text>
                    <TouchableOpacity onPress={() => removeTodo(todo.id)}>
                        <View style={{ backgroundColor: 'salmon', margin: 10, padding: 10}}>
                            <Text >Delete</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
        <View>
            <TextInput
                value={newTodo}
                onChangeText={setNewTodo}
                placeholder="Input your todo"
            />
            <TouchableOpacity onPress={saveTodo}>
                <Text>ADD TODO</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
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
