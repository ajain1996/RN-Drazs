import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { commonStyles } from '../utils/Styles'
import CustomButton from '../component/CustomButton'
import { COLORS } from '../constants/theme'

export default function GeneralPestControl({ navigation }) {
    return (
        <ScrollView>
            <View>
                <Image
                    source={require("../assets/single-visit-cleaning.jpg")}
                    style={{ width: "100%", height: 240 }}
                />

                <View style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
                    <Text style={{ ...commonStyles.fs20_700, marginBottom: 10 }}>AC Cleaning</Text>

                    <View style={styles.displayBox}>
                        <Text style={{ ...commonStyles.fs13_400 }}>
                            {"• Government-approved and safe treatment applied at your home from a licensed pest control company, guaranteed to terminate your problem such as ants, cockroaches etc."}
                        </Text>
                    </View>

                    <CustomButton
                        fs={16} text={"Submit"} fw={"600"}
                        textColor={COLORS.white}
                        bgColor={COLORS.primary}
                        width={"100%"} height={50}
                        onPress={() => { navigation.navigate("PestControlService") }}
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