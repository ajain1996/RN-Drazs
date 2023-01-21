import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import React from 'react'
import { commonStyles } from '../utils/Styles'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CustomHeader({ title, navigation }) {
    return (
        <View style={styles.container}>
            {navigation
                ? <TouchableHighlight onPress={() => navigation.goBack()} underlayColor="#eee">
                    <Ionicons name="chevron-back" size={30} color="#000" />
                </TouchableHighlight>
                : <></>}
            <Text style={{ ...commonStyles.fs16_400, color: "#000" }}>{title}</Text>

            <View style={{ width: 40 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...commonStyles.rowBetween,
        padding: 14,
        backgroundColor: "#fff",
        elevation: 9,
        shadowColor: "#999"
    }
})
