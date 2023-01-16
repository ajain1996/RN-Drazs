import { StyleSheet, Image, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableHighlight } from 'react-native';
import { COLORS } from '../constants/theme';
import { commonStyles } from '../utils/Styles';
import MText from './MText';

export function CustomCheckTickbox({ callback }) {
    const [isChecked, setIsChecked] = useState(false);

    const checkBoxOnPress = () => {
        setIsChecked(!isChecked);
        callback()
    }

    const returnCheck = () => {
        if (!isChecked) {
            return (
                <Image
                    source={require("../assets/check-outline.png")}
                    style={{ width: 18, height: 18, tintColor: COLORS.primary }}
                />
            )
        } else {
            return (
                <Image
                    source={require("../assets/checkbox.png")}
                    style={{ width: 20, height: 20, tintColor: COLORS.primary }}
                />
            )
        }
    }

    return (
        <TouchableHighlight onPress={() => checkBoxOnPress()} underlayColor="#f7f8f9">
            {returnCheck()}
        </TouchableHighlight>
    );
}

export function CustomCheckTickbox2({ callback }) {
    const [isChecked, setIsChecked] = useState(false);

    const checkBoxOnPress = () => {
        setIsChecked(!isChecked);
        callback()
    }

    const returnCheck = () => {
        if (!isChecked) {
            return (
                <Image
                    source={require("../assets/check-outline.png")}
                    style={{ width: 18, height: 18, tintColor: COLORS.primary }}
                />
            )
        } else {
            return (
                <Image
                    source={require("../assets/check-filled.png")}
                    style={{ width: 20, height: 20, tintColor: COLORS.theme, borderRadius: 5 }}
                />
            )
        }
    }

    return (
        <TouchableHighlight onPress={() => checkBoxOnPress()} underlayColor="#f7f8f9">
            {returnCheck()}
        </TouchableHighlight>
    );
}

export function CustomCheckCircle({ text, callback }) {
    const [isChecked, setIsChecked] = useState(false);

    const checkBoxOnPress = () => {
        setIsChecked(!isChecked);
        callback()
    }

    const returnCheck = () => {
        if (!isChecked) {
            return (
                <View style={{
                    width: 18, height: 18, borderWidth: 1.5, borderColor: COLORS.primary, borderRadius: 100
                }} />
            )
        } else {
            return (
                <Image
                    source={require("../assets/checked.png")}
                    style={{ width: 18, height: 18, tintColor: COLORS.primary }}
                />
            )
        }
    }

    return (
        <TouchableHighlight onPress={() => checkBoxOnPress()} underlayColor="#f7f8f9" style={{ alignItems: "center" }}>
            <View style={{ ...commonStyles.rowStart }}>
                {returnCheck()}
                <View style={{ width: 12 }} />
                <MText
                    fs={13} text={text}
                    textColor="#000" fw="600"
                />
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    checkBox: {
        width: 24, height: 24,
        borderWidth: 1.6,
        borderColor: COLORS.pink,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    checkBox2: {
        width: 20, height: 20,
        borderWidth: 1.6,
        borderColor: COLORS.pink,
        borderRadius: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    isCheckedStyle: {
        width: 14, height: 14,
        backgroundColor: COLORS.pink,
        borderRadius: 100,
    }
})