import { View, Text, ScrollView, StyleSheet, TouchableHighlight, TextInput, StatusBar } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import { Button } from 'react-native-paper'
import { COLORS, SIZES } from '../../constants/theme'
import CustomButton from '../../component/CustomButton'
import CustomHeader from '../../component/CustomHeader'

const dateList = [
    { day: "THU", date: "19", month: "Jan" },
    { day: "FRI", date: "20", month: "Jan" },
    { day: "SAT", date: "21", month: "Jan" },
    { day: "SUN", date: "22", month: "Jan" },
    { day: "MON", date: "23", month: "Jan" },
    { day: "TUE", date: "24", month: "Jan" },
    { day: "WED", date: "25", month: "Jan" },
    { day: "THU", date: "26", month: "Jan" },
    { day: "FRI", date: "27", month: "Jan" },
]

const timeList = [
    { timeType: "AM", time: "10 AM - 11 AM" },
    { timeType: "AM", time: "11 AM - 12 AM" },
    { timeType: "PM", time: "12 PM - 1 PM" },
    { timeType: "PM", time: "1 PM - 2 PM" },
    { timeType: "AM", time: "2 PM - 3 PM" },
    { timeType: "PM", time: "3 PM - 4 PM" },
    { timeType: "PM", time: "4 PM - 5 PM" },
    { timeType: "PM", time: "5 PM - 6 PM" },
    { timeType: "PM", time: "6 PM - 7 PM" },
]

export default function CarpetCleaningService({ navigation }) {
    return (
        <>
            <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
            <CustomHeader title="Carpet Cleaning" navigation={navigation} />
            <Text />
            <ScrollView>
                <RenderNumberBox
                    title="How many carpets would you like to clean"
                    list={[1, 2, 3, 4, 5, 6, 7, 8]}
                />

                <CustomDivider />

                <RenderDateBox
                    title="When would you like the service"
                    list={dateList}
                />
                <CustomDivider />

                <RenderTimeBox
                    title="Please select the estimated arrival time"
                    list={timeList}
                />
                <CustomDivider />

                <View style={{ paddingHorizontal: 16, paddingVertical: 4 }}>
                    <Text style={{ ...commonStyles.fs13_400, marginBottom: 5 }}>
                        Anything else you'd like us to know?
                    </Text>
                    <TextInput
                        placeholder=''
                        style={styles.input}
                    />
                </View>
            </ScrollView>

            <View style={styles.button}>
                <View style={{ width: SIZES.width / 2.4 }}>
                    <Text style={{ ...commonStyles.fs12_600, color: COLORS.primary, textAlign: "center" }}>AED 100.00</Text>
                </View>

                <CustomButton
                    fs={16} text={"Next"} fw={"600"}
                    textColor={COLORS.white}
                    bgColor={COLORS.primary}
                    width={SIZES.width / 2.2} height={45}
                    onPress={() => { }}
                />
            </View>
        </>
    )
}

export const RenderNumberBox = ({ title, list }) => {
    return (
        <View style={{}}>
            <Text style={{ ...commonStyles.fs13_400, paddingHorizontal: 16 }}>
                {title}
            </Text>

            <ScrollView horizontal style={{ paddingLeft: 10, marginTop: 5 }}>
                {
                    list.map((data, index) => {
                        return (
                            <TouchableHighlight style={styles.numberOfCarpets} key={index} onPress={() => { }}>
                                <Text style={{ ...commonStyles.fs14_400, color: "#fff" }}>{data}</Text>
                            </TouchableHighlight>
                        );
                    })
                }
            </ScrollView>
        </View>
    );
}

export const RenderDateBox = ({ title, list }) => {
    return (
        <View style={{}}>
            <Text style={{ ...commonStyles.fs13_400, paddingHorizontal: 16 }}>
                {title}
            </Text>

            <ScrollView horizontal style={{ paddingLeft: 8, marginTop: 5 }}>
                {
                    list.map((data, index) => {
                        return (
                            <TouchableHighlight style={styles.dateOfCarpets} key={index} onPress={() => { }}>
                                <View style={{ alignItems: "center" }}>
                                    <Text style={{ ...commonStyles.fs12_400, color: "#fff" }}>{data.day}</Text>
                                    <Text style={{ ...commonStyles.fs14_600, color: "#fff" }}>{data.date}</Text>
                                    <Text style={{ ...commonStyles.fs12_400, color: "#fff" }}>{data.month}</Text>
                                </View>
                            </TouchableHighlight>
                        );
                    })
                }
            </ScrollView>
        </View>
    );
}

export const RenderTimeBox = ({ title, list }) => {
    return (
        <View style={{}}>
            <Text style={{ ...commonStyles.fs13_400, paddingHorizontal: 16 }}>
                {title}
            </Text>

            <ScrollView horizontal style={{ paddingLeft: 8, marginTop: 5 }}>
                {
                    list.map((data, index) => {
                        return (
                            <TouchableHighlight style={styles.timeOfCarpets} key={index} onPress={() => { }}>
                                <View style={{ alignItems: "center" }}>
                                    <Text style={{ ...commonStyles.fs12_400, color: "#fff" }}>{data.timeType}</Text>
                                    <Text style={{ ...commonStyles.fs12_400, color: "#fff" }}>{data.time}</Text>
                                </View>
                            </TouchableHighlight>
                        );
                    })
                }
            </ScrollView>
        </View>
    );
}

export const CustomDivider = () => {
    return (
        <View style={{ width: "100%", height: 1, backgroundColor: "#ccc", marginTop: 20, marginBottom: 12 }} />
    )
}

const styles = StyleSheet.create({
    numberOfCarpets: {
        width: 46, height: 46, backgroundColor: COLORS.primary,
        marginLeft: 8, borderRadius: 8, ...commonStyles.centerStyles,
        marginRight: 4
    },
    dateOfCarpets: {
        width: 54, height: 80, backgroundColor: COLORS.primary,
        marginLeft: 8, borderRadius: 8, marginRight: 4,
        ...commonStyles.centerStyles
    },
    timeOfCarpets: {
        width: 110, height: 54, backgroundColor: COLORS.primary,
        marginLeft: 8, borderRadius: 8, marginRight: 4,
        ...commonStyles.centerStyles
    },
    input: {
        width: "100%", height: 160, borderRadius: 8, borderWidth: 1, borderColor: "#999",
    },
    button: {
        ...commonStyles.rowBetween, paddingHorizontal: 16,
        borderTopWidth: 1, borderTopColor: "#ccc", paddingVertical: 10,
    }
})