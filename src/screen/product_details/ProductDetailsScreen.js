import { View, Text, StyleSheet, ScrollView, StatusBar, ImageBackground, TouchableHighlight } from 'react-native'
import React from 'react'
import CustomHeader from '../../component/CustomHeader'
import { commonStyles } from '../../utils/Styles';
import CustomButton from '../../component/CustomButton';
import { COLORS, SIZES } from '../../constants/theme';
import MText from '../../component/MText';

export const itemList = [
    { name: "Carpet Cleaning", navigate: "CarpetCleaning" },
    { name: "Curtains Cleaning", navigate: "SingleVisitCleaning" },
    { name: "Deep Cleaning", navigate: "DeepCleaning" },
    { name: "Furniture Cleaning", navigate: "FurnitureMovingCleaning" },
    { name: "Electrician", navigate: "ElectricianCleaning" },
    { name: "AC Repair", navigate: "ACCleaningGasFilling" },
    { name: "Facial", navigate: "FacialCleaning" },
    { name: "Healing Massages", navigate: "HealingMassages" },
    { name: "Relaxing Massages", navigate: "RelaxingMassages" },
    { name: "Mani-Pedi with Color", navigate: "ManiPedi" },
    { name: "Mattress Cleaning", navigate: "GeneralPestControl" },
    { name: "Sanitization", navigate: "FacialCleaning" },
    { name: "Water Tank Cleaning", navigate: "CarWashPremium" },
]

export default function ProductDetailsScreen({ navigation, route }) {
    const { item } = route?.params;

    return (
        <>
            <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
            <CustomHeader title="0.Special Offer" navigation={navigation} />
            <ScrollView>
                <View style={styles.categoriesText}>
                    <Text style={{ ...commonStyles.fs17_500 }}>
                        Subcategories
                    </Text>

                    {
                        [
                            require("../../assets/ser/s1.jpg"),
                            require("../../assets/ser/s2.jpg"),
                            require("../../assets/ser/s3.jpg"),
                            require("../../assets/ser/s4.jpg"),
                            require("../../assets/ser/s5.jpg"),
                            require("../../assets/ser/s6.jpg"),
                        ].map((data, index) => {
                            return (
                                <TouchableHighlight style={{ marginVertical: 8 }} key={index}
                                    onPress={() => { navigation.navigate(item?.navigate) }}
                                >
                                    <ImageBackground
                                        source={data} resizeMode="stretch" blurRadius={1}
                                        style={{ width: "100%", height: 220, justifyContent: 'flex-end' }}
                                        imageStyle={{ borderRadius: 8 }}
                                    >
                                        <View style={{ paddingHorizontal: 16, paddingVertical: 10 }}>
                                            <MText
                                                text="Home Cleaning for 110 SR"
                                                fs={16} fw="700"
                                                textColor="#fff"
                                            />
                                            <MText
                                                text="Home Cleaning for 110 SR"
                                                fs={12} fw="400"
                                                textColor="#fff"
                                            />
                                        </View>
                                    </ImageBackground>
                                </TouchableHighlight>
                            );
                        })
                    }
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    categoriesText: {
        alignItems: 'flex-start',
        width: '100%',
        paddingHorizontal: 16,
        marginTop: 20
    }
});
