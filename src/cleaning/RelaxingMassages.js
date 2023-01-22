import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { commonStyles } from '../utils/Styles'
import CustomButton from '../component/CustomButton'
import { COLORS } from '../constants/theme'

export default function RelaxingMassages({ navigation }) {
    return (
        <ScrollView>
            <View>
                <Image
                    source={require("../assets/single-visit-cleaning.jpg")}
                    style={{ width: "100%", height: 240 }}
                />

                <View style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
                    <Text style={{ ...commonStyles.fs20_700, marginBottom: 10 }}>Regular:</Text>

                    <View style={styles.displayBox}>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 4 }}>
                            {"• Relaxing massage for neck, back, arms and legs to de-stress and relax body and mind."}
                        </Text>
                    </View>

                    <Text style={{ ...commonStyles.fs20_700, marginBottom: 10 }}>Swedish Massage:</Text>

                    <View style={styles.displayBox}>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 4 }}>
                            {"• It involves soft, long, kneading strokes, as well as light, rhythmic, tapping strokes, on topmost layers of muscles. This is also combined with movement of the joints. By relieving muscle tension, Swedish therapy can be both relaxing and energizing. And it may even help after an injury."}
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400, marginTop: 2 }}>
                            {"• Reflexology has many benefits including reducing stress and anxiety, decreasing pain and improving state of mind."}
                        </Text>
                    </View>

                    <Text style={{ ...commonStyles.fs20_700, marginBottom: 10 }}>Hot Stone:</Text>

                    <View style={styles.displayBox}>
                        <Text style={{ ...commonStyles.fs13_400 }}>
                            {"• This type of massage is used to help you relax and ease tense muscles and damaged soft tissues throughout your body. During a hot stone massage, smooth, flat, heated stones are placed on specific parts of your body especially along the spinal area on your back."}
                        </Text>
                    </View>

                    <Text style={{ ...commonStyles.fs20_700, marginBottom: 10 }}>Important notice:</Text>

                    <View style={styles.displayBox}>
                        <Text style={{ ...commonStyles.fs13_400 }}>
                            {"• In case of ordering the service from more than 1 person, all individuals receiving the service must be present in same address registered on the app."}
                        </Text>
                        <Text style={{ ...commonStyles.fs13_400 }}>
                            {"• Service duration is 60 minutes"}
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