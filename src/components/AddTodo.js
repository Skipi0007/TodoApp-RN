import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Keyboard, Alert,} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { THEME } from '../themes'

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
            Keyboard.dismiss()
        } else {
            Alert.alert('Название не может быть пустым')
        }
        
    }

    return (
        <View style={styles.block}>
            <TextInput 
            style={styles.input}
            onChangeText={text => setValue(text)}
            value={value}
            placeholder="Insert todo name"
            autoCorrect={false}
            autoCapitalize="none"
            />
            <AntDesign.Button onPress={pressHandler} name="pluscircleo" size={24} color="black">
            Add
            </AntDesign.Button>
             {/* <Button title='Add' onPress={pressHandler}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR
            
    }
    
})


