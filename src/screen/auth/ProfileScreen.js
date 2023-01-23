import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import { commonStyles } from '../../utils/Styles'
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"
import CustomButton from '../../component/CustomButton'
import MText from '../../component/MText'
import CustomHeader from '../../component/CustomHeader'

export default function ProfileScreen({ navigation }) {
    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
            <CustomHeader title="Profile" />
            <ScrollView>
                <View style={{ padding: 16, height: SIZES.height / 1.2, justifyContent: "space-between" }}>
                    <View>
                        <View style={styles.personal}>
                            <View style={styles.userImage}>
                                <Image
                                    source={{ uri: "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_960_720.png" }}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </View>

                            <Text style={{ ...commonStyles.fs18_400, color: COLORS.primary }}>Anshul Kumar</Text>
                            <Text style={{ ...commonStyles.fs12_400, color: "#999" }}>anshulkumar@gmail.com</Text>
                        </View>
                        <Text />

                        {/* General */}
                        <View style={styles.general}>
                            <RenderGeneralBtn
                                btnText="App Language"
                                btnIcon="globe"
                                onPress={() => { navigation?.navigate("LocationScreen"); }}
                            />

                            <RenderGeneralBtn
                                btnText="Privacy Policy"
                                btnIcon="book-open"
                                onPress={() => { navigation?.navigate("LocationScreen"); }}
                            />

                            <RenderGeneralBtn
                                btnText="Terms & Conditions"
                                btnIcon="file-text"
                                onPress={() => { navigation?.navigate("LocationScreen"); }}
                            />
                        </View>
                    </View>

                    <View style={{ elevation: 0, marginTop: 20 }}>
                        <CustomButton
                            fs={16} text={"Logout"}
                            textColor={COLORS.primary}
                            bgColor="#fff" fw={"700"}
                            width={"100%"} height={50}
                            borderRadius={6}
                            onPress={() => { }}
                        />

                        <MText
                            text="V2.1.0"
                            textColor="#000"
                            fs={12}
                            textAlign="center"
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const RenderGeneralBtn = ({ btnText, btnIcon, onPress }) => {
    return (
        <TouchableOpacity style={{ ...commonStyles.rowBetween, width: "100%", padding: 16 }} onPress={onPress}>
            <View style={{ ...commonStyles.rowStart }}>
                <Feather name={btnIcon} color="#000" size={28} />
                <Text style={{ ...commonStyles.fs16_400, marginLeft: 12, marginBottom: 4 }}>{btnText}</Text>
            </View>
            <Ionicons name='chevron-forward' color="#000" size={28} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    userImage: {
        width: 120, height: 120,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: COLORS.primary,
        marginBottom: 8
    },
    personal: {
        alignItems: 'center',
        elevation: 9,
        shadowColor: "#999",
        backgroundColor: "#fff",
        paddingVertical: 20,
        borderRadius: 9
    },
    general: {
        alignItems: 'center',
        elevation: 9,
        shadowColor: "#999",
        backgroundColor: "#fff",
        borderRadius: 9
    }
})
