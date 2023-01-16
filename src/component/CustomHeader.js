import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { commonStyles } from '../utils/Styles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants/theme';

export default function CustomHeader({ title, navigation }) {
    return (
        <View style={{ ...commonStyles.rowBetween, padding: 14, backgroundColor: COLORS.primary }}>
            {navigation
                ? <TouchableHighlight onPress={() => navigation.goBack()} underlayColor="#eee">
                    <Ionicons name="chevron-back" size={30} color="#fff" />
                </TouchableHighlight>
                : <></>}
            <Text style={{ ...commonStyles.fs16_400, color: "#fff" }}>{title}</Text>

            <View style={{ width: 40 }} />
        </View>
    )
}
