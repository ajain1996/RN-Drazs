import React, { useState } from 'react'
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Alert, StatusBar } from 'react-native'
import CustomButton from '../../component/CustomButton';
import { CustomCheckCircle } from '../../component/CustomCheckbox';
import CustomInput from '../../component/CustomInput'
import MText from '../../component/MText';
import Mtext from '../../component/MText';
import TouchableText from '../../component/TouchableText';
import { COLORS, SIZES } from '../../constants/theme';
import { commonStyles } from '../../utils/Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function RegisterScreen({ navigation }) {

    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [showEye, setShowEye] = useState("");

    const handleSubmitOnPress = () => {
        if (firstName.length === 0) {
            setFirstNameError("First Name is required");
        } if (lastName.length === 0) {
            setLastNameError("Last Name is required");
        } if (phone.length === 0) {
            setPhoneError("Phone is required");
        } if (email.length === 0) {
            setEmailError("Email is required");
        } else if (!(email.includes("@")) || !(email.includes("gmail.com"))) {
            setEmailError("Invalid Email");
        } if (password.length === 0) {
            setPasswordError("Invalid Password")
        } else if (password.length < 6) {
            setPasswordError("Password must be 6 characters long")
        } else {
            navigation.navigate("Home");
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <View style={styles.header_block}>

                <View style={styles.logo}>
                    <AntDesign name="user" size={35} color="#fff" />
                </View>
                <View style={{ marginTop: 14 }} />

                <MText
                    fs={28} textColor="black" fw="900"
                    text={"Hello User !"}
                />
                <View style={{ marginTop: 14 }} />

                <MText
                    fs={16} textColor="#000" textAlign="center" spacing={0.6}
                    lineHeight={22}
                    text={"Signup For Better Experience"}
                />
            </View>

            <View style={{ alignItems: 'center', marginTop: 40, }}>
                <CustomInput
                    placeholderText="First Name"
                    iconType="user"
                    headingText="First Name"
                    error={firstNameError}
                    labelValue={firstName}
                    onChangeText={(val) => {
                        setFirstName(val);
                        setFirstNameError("");
                    }}
                />
            </View>

            <View style={{ alignItems: 'center', }}>
                <CustomInput
                    placeholderText="Last Name"
                    iconType="user"
                    headingText="Last Name"
                    keyboardType={'email-address'}
                    autoCapitalize='none'
                    error={lastNameError}
                    labelValue={email}
                    onChangeText={(val) => {
                        setEmail(val);
                        setLastNameError("");
                    }}
                />
            </View>

            <View style={{ alignItems: 'center', }}>
                <CustomInput
                    placeholderText="Email"
                    iconType="mail"
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

            <View style={{ alignItems: 'center', }}>
                <CustomInput
                    placeholderText="Contact Number"
                    iconType="phone"
                    headingText="Contact Number"
                    keyboardType='number-pad'
                    autoCapitalize='none'
                    error={phoneError}
                    labelValue={email}
                    onChangeText={(val) => {
                        setPhone(val);
                        setPhoneError("");
                    }}
                />
            </View>

            <View style={{ alignItems: 'center', }}>
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
            <View style={{ marginTop: 16 }} />

            <View style={{ ...commonStyles.rowStart, justifyContent: "center" }}>
                <CustomCheckCircle text="I agree to the" />
                <View style={{ width: 5 }} />
                <TouchableText
                    text="Terms of Service" fs={13} fw="700" color={COLORS.primary}
                    onPress={() => { }}
                />
                <View style={{ width: 5 }} />
                <Mtext fs={13} text="&" textColor="#000" fw="400" />
                <View style={{ width: 5 }} />
                <TouchableText
                    text="Privacy Policy" fs={13} fw="700" color={COLORS.primary}
                    onPress={() => { }}
                />
            </View>
            <View style={{ marginTop: 22 }} />

            <CustomButton
                fs={16} text={"Sign Up"} fw={"600"}
                textColor={COLORS.white}
                bgColor={COLORS.primary}
                width={"100%"} height={50}
                onPress={handleSubmitOnPress}
            />
            <View style={{ marginTop: 20 }} />

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Mtext
                    fs={14} text={"Already have an account? "}
                    textColor={COLORS.gray} fw="600"
                />
                <TouchableOpacity
                    style={{ alignItems: 'center' }}
                    activeOpacity={0.6}
                    onPress={() => { navigation.navigate("LoginScreen") }}
                >
                    <Mtext
                        fs={14} text={"Sign In"} fw="700"
                        textColor={COLORS.primary}
                    />
                </TouchableOpacity>
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
    logo: {
        width: 80, height: 80,
        backgroundColor: COLORS.primary,
        borderRadius: 100,
        ...commonStyles.centerStyles
    },
});

