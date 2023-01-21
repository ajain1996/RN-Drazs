import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { commonStyles } from '../utils/Styles'
import CustomButton from '../component/CustomButton'
import { COLORS } from '../constants/theme'

export default function CarWashPremium({ navigation }) {
    return (
        <ScrollView>
            <View>
                <Image
                    source={require("../assets/single-visit-cleaning.jpg")}
                    style={{ width: "100%", height: 240 }}
                />

                <View style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
                    <Text style={{ ...commonStyles.fs20_700, marginBottom: 10 }}>Car Wash - Premium</Text>

                    <View style={styles.displayBox}>
                        <Text style={{ ...commonStyles.fs14_600 }}>
                            The Car Wash service is performed by experienced men and it includes:
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 4 }}>
                            {"• Steam cleaning and disinfecting interior Cleaning and polishing dashboard"}
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>
                            {"• Cleaning seats and car floor"}
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>
                            {"• Cleaning the ceiling and removing stains - Cleaning windows with steam"}
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>
                            {"• Adding protective product to leather seats Perfuming the car with nice scents Cleaning and polishing tires and rims"}
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>
                            {"Polishing car exterior, unifying color and removing scratches"}
                        </Text>
                    </View>

                    <CustomButton
                        fs={16} text={"Submit"} fw={"600"}
                        textColor={COLORS.white}
                        bgColor={COLORS.primary}
                        width={"100%"} height={50}
                        onPress={() => { navigation.navigate("CarWashRegular") }}
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