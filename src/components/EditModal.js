import React, {useState} from 'react'
import {StyleSheet, View, TextInput, Button, Modal, Alert} from 'react-native'
import { THEME } from '../themes'
import {AppButton} from './ui/AppButton'

export const EditModal =({ visible, onCancel, value, onSave }) => {
    const [title, setTitle] = useState(value)

    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert('Error!', `Minimum 3 simbols, current length ${title.trim().length} simbols`)
        } else {
            onSave(title)
        }
    }

    return (
        <Modal visible={visible} animationType="slide" transparent={false}>
            <View style={styles.wrap}>
                <TextInput value={title} onChangeText={setTitle} style={styles.input} placeholder='Enter title' autoCapitalize="none" autoCorrect={false} maxLength={64} />
                <View style={styles.buttons}>
                    <AppButton onPress={onCancel} color={THEME.DANGER_COLOR}>Cancle</AppButton>
                    <AppButton onPress={saveHandler} >Save</AppButton>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap:{
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },

    input:{
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: "80%"
    },
    buttons: {
        width: "100%",
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})