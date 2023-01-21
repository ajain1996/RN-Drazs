import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { commonStyles } from '../utils/Styles'
import CustomButton from '../component/CustomButton'
import { COLORS } from '../constants/theme'

export default function CarpetCleaning({ navigation }) {
    return (
        <ScrollView>
            <View>
                <Image
                    source={require("../assets/single-visit-cleaning.jpg")}
                    style={{ width: "100%", height: 240 }}
                />

                <View style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
                    <Text style={{ ...commonStyles.fs20_700, marginBottom: 10 }}>Carpet Cleaning</Text>

                    <View style={styles.displayBox}>
                        <Text style={{ ...commonStyles.fs14_600 }}>
                            The carpet cleaning service is performed by experienced men and it includes:
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 4 }}>
                            {"• Dust and wipe all surfaces Floor polishing"}
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>
                            {"• Clean all floors and corners"}
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>
                            {"• Clean all windows and mirrors"}
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>
                            {"• Clean all sinks and faucets"}
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>
                            {"• Dust and wipe difficult to reach areas"}
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>
                            {"• Clean inside kitchen and bathroom cabinets"}
                        </Text>
                    </View>

                    <View style={styles.displayBox}>
                        <Text style={{ ...commonStyles.fs14_600 }}>
                            All materials and equipment are included
                        </Text>
                    </View>

                    <CustomButton
                        fs={16} text={"Submit"} fw={"600"}
                        textColor={COLORS.white}
                        bgColor={COLORS.primary}
                        width={"100%"} height={50}
                        onPress={() => { navigation.navigate("CarpetCleaningService") }}
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