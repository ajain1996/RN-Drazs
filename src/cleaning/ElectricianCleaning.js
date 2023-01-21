import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { commonStyles } from '../utils/Styles'
import CustomButton from '../component/CustomButton'
import { COLORS } from '../constants/theme'

export default function ElectricianCleaning({ navigation }) {
    return (
        <ScrollView>
            <View>
                <Image
                    source={require("../assets/single-visit-cleaning.jpg")}
                    style={{ width: "100%", height: 240 }}
                />

                <View style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
                    <Text style={{ ...commonStyles.fs20_700, marginBottom: 10 }}>Electrician</Text>

                    <View style={styles.displayBox}>
                        <Text style={{ ...commonStyles.fs14_600 }}>
                            The deep cleaning service is performed by experienced men and it includes:
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 4 }}>
                            {"Book a professional electrician for any of your home electrical needs."}
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>
                            {"The team will be equipped with standard tools (i.e. hammers, drills, nails, ladder)."}
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>
                            {"Final price of service is determined after inspection"}
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>
                            {"There is a charge of SR 25 for on site visit inspections."}
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>
                            {"Prices include labor costs only. All spare parts are charged separately."}
                        </Text>
                    </View>

                    <CustomButton
                        fs={16} text={"Submit"} fw={"600"}
                        textColor={COLORS.white}
                        bgColor={COLORS.primary}
                        width={"100%"} height={50}
                        onPress={() => { navigation.navigate("ElectricianService") }}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    displayBox: {
        elevation: 5,
        shadowColor: "#999",
        borderRadius: 6,
        padding: 10,
        backgroundColor: "#fff",
        marginBottom: 15
    }
})