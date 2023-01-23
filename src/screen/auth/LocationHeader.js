import { View, Text, TouchableHighlight, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS, SIZES } from '../../constants/theme'
import Fontisto from 'react-native-vector-icons/Fontisto'

export default function LocationHeader({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={() => navigation.goBack()} underlayColor="#eee">
                <View style={{ ...commonStyles.rowStart }}>
                    <Ionicons name="chevron-back" size={28} color={COLORS.primary} />
                    <Text style={{ ...commonStyles.fs15_400, color: COLORS.primary, marginBottom: 1 }}>
                        Back
                    </Text>
                </View>
            </TouchableHighlight>

            <View style={{ marginLeft: 16 }}>
                <TextInput
                    placeholder='Search'
                    placeholderTextColor="#999"
                    style={styles.input}
                />
                <Fontisto name="search" size={17} color="#999" style={{ position: "absolute", top: 15, left: 16 }} />
            </View>

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
        shadowColor: "#999",
        width: SIZES.width
    },
    input: {
        width: SIZES.width / 1.4,
        height: 44,
        borderRadius: 8,
        backgroundColor: "#EDEDED",
        paddingHorizontal: 44
    }
})
