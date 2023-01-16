import { View, Text } from 'react-native'
import React from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler'
import MText from './MText'

export default function TouchableText({ onPress, text, fs, fw, color }) {
    return (
        <TouchableHighlight underlayColor="#dcdcdc" onPress={onPress}>
            <MText
                fs={fs} text={text}
                textColor={color} fw={fw}
            />
        </TouchableHighlight>
    )
}