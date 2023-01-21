import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { commonStyles } from '../utils/Styles'
import CustomButton from '../component/CustomButton'
import { COLORS } from '../constants/theme'

export default function SingleVisitCleaning({ navigation }) {
    return (
        <ScrollView>
            <View>
                <Image
                    source={require("../assets/single-visit-cleaning.jpg")}
                    style={{ width: "100%", height: 240 }}
                />

                <View style={{ paddingHorizontal: 16, paddingVertical: 10 }}>
                    <Text style={{ ...commonStyles.fs20_700, marginBottom: 10 }}>Cleaning - Single Visit</Text>

                    <View style={styles.displayBox}>
                        <Text style={{ ...commonStyles.fs14_600 }}>Cleaner's Nationality: </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 4 }}>{"• Philippines"}</Text>
                        <Text style={{ ...commonStyles.fs13_400 }}>{"• Indonesia"}</Text>
                    </View>

                    <View style={styles.displayBox}>
                        <Text style={{ ...commonStyles.fs14_600 }}>Arrival Times: </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 4 }}>
                            Morning between 8 and 10 am Evening between 4 and 6 pm
                        </Text>
                    </View>

                    <View style={styles.displayBox}>
                        <Text style={{ ...commonStyles.fs14_600 }}>
                            This service includes general cleaning for accessible areas, including:
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 4 }}>{"• Dusting"}</Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>{"• Sweeping"}</Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>{"• Mopping"}</Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>{"• Dish Washing"}</Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>{"• Dusting"}</Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>{"• Cabinet and refrigerator cleaning"}</Text>
                    </View>

                    <View style={styles.displayBox}>
                        <Text style={{ ...commonStyles.fs14_600 }}>
                            Terms & Conditions:
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 4 }}>
                            {"• A female must be present at the time of maid arrival. In case of female absence, the visit won't be refunded "}
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>
                            {"• Kindly prepare all cleaning products before the maid's arrival"}
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>
                            {"• Kindly pay attention to your belongings as we are not responsible for missing or damaged items"}
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>
                            {"• The visit is canceled if the driver's call is not answered"}
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>
                            {"• Kindly note that Filipinas might be replaced with cleaners from other nationalities in case of absences"}
                        </Text>
                    </View>

                    <CustomButton
                        fs={16} text={"Submit"} fw={"600"}
                        textColor={COLORS.white}
                        bgColor={COLORS.primary}
                        width={"100%"} height={50}
                        onPress={() => { navigation.navigate("DeepCleaning") }}
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