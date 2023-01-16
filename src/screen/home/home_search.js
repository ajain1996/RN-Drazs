import { View, TouchableHighlight, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import { commonStyles } from '../../utils/Styles'
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function home_search(onChange) {
    return (
        <View style={{ ...commonStyles.rowBetween, width: SIZES.width, paddingHorizontal: 12 }}>
            <View>
                <TextInput
                    placeholder='All service available'
                    placeholderTextColor="#000"
                    onChangeText={onChange}
                    style={styles.input}
                />
                <View style={{ position: "absolute", right: 14, top: 11 }}>
                    <MaterialIcons name="gps-fixed" size={26} color={COLORS.primary} />
                </View>
                <View style={{ position: "absolute", left: 10, top: 11 }}>
                    <Ionicons name="location-outline" size={26} color={COLORS.primary} />
                </View>
            </View>
            <TouchableHighlight style={styles.searchBtn}>
                <Feather name="search" size={26} color={COLORS.primary} />
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: SIZES.width - 90,
        height: 50,
        backgroundColor: "#F5F7F9",
        elevation: 4,
        shadowColor: "#000",
        borderRadius: 6,
        paddingHorizontal: 42,
        fontSize: 14,
        fontWeight: "400",
        color: "#000"
    },
    searchBtn: {
        width: 50, height: 50,
        ...commonStyles.centerStyles,
        elevation: 4, shadowColor: "#000",
        backgroundColor: "#F5F7F9",
        borderRadius: 6
    }
})