import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { commonStyles } from '../utils/Styles'
import CustomButton from '../component/CustomButton'
import { COLORS } from '../constants/theme'

export default function ManiPedi({ navigation }) {
    return (
        <ScrollView>
            <View>
                <Image
                    source={require("../assets/single-visit-cleaning.jpg")}
                    style={{ width: "100%", height: 240 }}
                />

                <View style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
                    <View style={styles.displayBox}>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 4 }}>
                            {"• Trimming and cleaning nails Nails coloring."}
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>
                            {"• Lavender oil massage for hands and feet."}
                        </Text>
                    </View>

                    <Text style={{ ...commonStyles.fs20_700, marginBottom: 10 }}>Important notice:</Text>

                    <View style={styles.displayBox}>
                        <Text style={{ ...commonStyles.fs13_400 }}>
                            {"• Service duration 60 minutes per person"}
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400 }}>
                            {"• In case of ordering the service for more than 1 person, all individuals receiving the service must be present at the same address registered on the app"}
                        </Text>
                    </View>

                    <CustomButton
                        fs={16} text={"Submit"} fw={"600"}
                        textColor={COLORS.white}
                        bgColor={COLORS.primary}
                        width={"100%"} height={50}
                        onPress={() => { navigation.navigate("ACRepair") }}
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