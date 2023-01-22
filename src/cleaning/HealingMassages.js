import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { commonStyles } from '../utils/Styles'
import CustomButton from '../component/CustomButton'
import { COLORS } from '../constants/theme'

export default function HealingMassages({ navigation }) {
    return (
        <ScrollView>
            <View>
                <Image
                    source={require("../assets/single-visit-cleaning.jpg")}
                    style={{ width: "100%", height: 240 }}
                />

                <View style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
                    <Text style={{ ...commonStyles.fs20_700, marginBottom: 10 }}>Thai Massage:</Text>

                    <View style={styles.displayBox}>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 4 }}>
                            {"• Thai massage is applied to the hands, shoulders and neck."}
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>
                            {"• It involves a range of passive stretching movements performed with feet, knees, hands and elbows, in addition to helping relaxation, Thai massage also increases the flow of energy and flexibility while stimulating the internal organs for proper functioning."}
                        </Text>
                    </View>

                    <Text style={{ ...commonStyles.fs20_700, marginBottom: 10 }}>Reflexology:</Text>

                    <View style={styles.displayBox}>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 4 }}>
                            {"• It involves applying different amounts of pressure to feet, hands, and ears."}
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>
                            {"• Reflexology has many benefits including reducing stress and anxiety, decreasing pain and improving state of mind."}
                        </Text>
                    </View>

                    <Text style={{ ...commonStyles.fs20_700, marginBottom: 10 }}>Important notice:</Text>

                    <View style={styles.displayBox}>
                        <Text style={{ ...commonStyles.fs13_400 }}>
                            {"• In case of ordering the service from more than 1 person, all individuals receiving the service must be present in same address registered on the app. • Service duration is 60 minutes"}
                        </Text>
                    </View>

                    <CustomButton
                        fs={16} text={"Submit"} fw={"600"}
                        textColor={COLORS.white}
                        bgColor={COLORS.primary}
                        width={"100%"} height={50}
                        onPress={() => { navigation.navigate("MassagesService") }}
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