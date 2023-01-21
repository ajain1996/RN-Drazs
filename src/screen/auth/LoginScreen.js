import React, { useState } from 'react'
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Alert, TouchableHighlight, StatusBar } from 'react-native'
import CustomButton from '../../component/CustomButton';
import { CustomCheckTickbox, CustomCheckTickbox2 } from '../../component/CustomCheckbox';
import CustomInput from '../../component/CustomInput'
import MText from '../../component/MText';
import { COLORS, SIZES } from '../../constants/theme';
import { commonStyles } from '../../utils/Styles';

export default function LoginScreen({ navigation }) {

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showEye, setShowEye] = useState("");

    const handleSubmitOnPress = () => {
        if (email.length === 0) {
            setEmailError("Email is required");
        } else if (!(email.includes("@")) || !(email.includes("gmail.com"))) {
            setEmailError("Invalid Email");
        } if (password.length === 0) {
            setPasswordError("Invalid Password")
        } else if (password.length < 6) {
            setPasswordError("Password must be 6 characters long")
        } else {
            navigation.navigate("Root");
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <View style={styles.header_block}>

                <MText
                    fs={28} textColor="black" fw="900"
                    text={"Hello Again!"}
                />

                <View style={{ marginTop: 10 }} />

                <MText
                    fs={16} textColor="#000" textAlign="center" spacing={0.6}
                    lineHeight={22}
                    text={"Welcome back, you've been\nMissed For Long Time"}
                />
            </View>

            <View style={{ alignItems: 'center', marginTop: 50, }}>
                <CustomInput
                    placeholderText="Email"
                    iconType="user"
                    headingText="Email"
                    keyboardType={'email-address'}
                    autoCapitalize='none'
                    error={emailError}
                    labelValue={email}
                    onChangeText={(val) => {
                        setEmail(val);
                        setEmailError("");
                    }}
                />
            </View>

            <View style={{ alignItems: 'center', marginTop: 10, }}>
                <CustomInput
                    placeholderText="Password"
                    iconType={showEye ? "eye" : "eyeo"}
                    headingText="Password"
                    error={passwordError}
                    secureTextEntry={showEye ? false : true}
                    labelValue={password}
                    onChangeText={(val) => {
                        setPassword(val);
                        setPasswordError("");
                    }}
                    onPress={() => { setShowEye(!showEye) }}
                />
            </View>

            <View style={{ ...commonStyles.rowBetween, marginTop: -6 }}>
                <View style={{ ...commonStyles.rowStart }}>
                    <CustomCheckTickbox2 callback={() => { }} />
                    <View style={{ width: 8 }} />
                    <MText
                        fs={14} textColor={COLORS.black}
                        text={"Remember Me"} fw="400"
                    />
                </View>
                <TouchableHighlight
                    style={{ paddingHorizontal: 10, paddingVertical: 6, }}
                    activeOpacity={0.6} underlayColor={'#f7f7f7'}
                    onPress={() => { navigation.navigate("ForgotPasswordScreen") }}
                >
                    <MText
                        fs={14} textColor={COLORS.primary}
                        text={"Forgot Password?"} fw="600"
                    />
                </TouchableHighlight>
            </View>

            <View style={{ marginTop: 20 }} />

            <CustomButton
                fs={16} text={"Sign In"} fw={"600"}
                textColor={COLORS.white}
                bgColor={COLORS.primary}
                width={"100%"} height={50}
                onPress={handleSubmitOnPress}
            />
            <View style={{ marginTop: 20 }} />

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <MText
                    fs={15} text={"Don't have an account? "}
                    textColor={COLORS.gray} fw="600"
                />
                <TouchableOpacity
                    style={{ alignItems: 'center' }}
                    activeOpacity={0.6}
                    onPress={() => { navigation.navigate("SignUpScreen") }}
                >
                    <MText
                        fs={15} text={"Sign Up"} fw="700"
                        textColor={COLORS.primary}
                    />
                </TouchableOpacity>
            </View>

            <View style={{ ...commonStyles.rowBetween, marginVertical: 30 }}>
                <View style={{ width: "40%", height: 1, backgroundColor: "#dcdcdc" }} />
                <MText
                    fs={16} text={"OR"} fw="700"
                    textColor={COLORS.primary}
                />
                <View style={{ width: "40%", height: 1, backgroundColor: "#dcdcdc" }} />
            </View>

            <View style={{}}>
                <CustomButton
                    text={"Sign In with Google"}
                    textColor={COLORS.black}
                    iconColor={COLORS.primary}
                    bgColor={COLORS.lightGray4}
                    width={"100%"} height={56}
                    fw={"600"} icon={"google"}
                    buttonStyle={{ justifyContent: "space-between", paddingHorizontal: 20 }}
                    fs={16} onPress={handleSubmitOnPress}
                    right={true} iconBg="#E0EDF4"
                    iconType="antdesign" iconSize={22}
                />
                <Text />

                <CustomButton
                    text={"Sign In with OTP"}
                    bgColor={COLORS.lightGray4}
                    iconColor={COLORS.primary}
                    textColor="#000"
                    width={"100%"} height={56}
                    fw={"600"} icon={"phone-call"}
                    buttonStyle={{ justifyContent: "space-between", paddingHorizontal: 20 }}
                    fs={16} onPress={handleSubmitOnPress}
                    right={true} iconBg="#E0EDF4"
                    iconType="feather" iconSize={20}
                />
            </View>

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 12,
        flexGrow: 1,
        justifyContent: 'center'
    },
    header_block: {
        alignItems: 'center',
        width: '100%',
    },
    login_logo: {
        width: 160,
        height: 60,
        marginTop: 20,
        marginBottom: 30,
    },
});

