import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import CustomHeader from '../../component/CustomHeader'
import { commonStyles } from '../../utils/Styles';
import CustomButton from '../../component/CustomButton';
import { COLORS, SIZES } from '../../constants/theme';

export default function ProductDetailsScreen({ navigation }) {
    return (
        <ScrollView>
            <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
            <View>
                <CustomHeader title="0.Special Offer" navigation={navigation} />
                <View style={styles.categoriesText}>
                    <Text style={{ ...commonStyles.fs17_500 }}>
                        Subcategories
                    </Text>
                    <View style={{ height: 10 }} />

                    <CustomButton
                        fs={16} text={"All"}
                        textColor={COLORS.white}
                        bgColor={COLORS.primary}
                        width={SIZES.width / 1.1}
                        height={48} fw={"600"}
                        buttonStyle={{ borderRadius: 18 }}
                        onPress={() => { }}
                    />
                    <View style={{ height: 8 }} />

                    {
                        [
                            "Carpet Cleaning",
                            "Curtains Cleaning",
                            "Deep Cleaning",
                            "Furniture Cleaning",
                            "Mattress Cleaning",
                            "Sanitization",
                            "Water Tank Cleaning"
                        ].map((data, index) => {
                            return (
                                <View style={{ marginVertical: 8 }} key={index}>
                                    <CustomButton
                                        fs={16} text={data}
                                        textColor="#000"
                                        bgColor={COLORS.white}
                                        width={SIZES.width / 1.1}
                                        height={46} fw={"600"}
                                        buttonStyle={{ borderRadius: 18, borderWidth: 1.5, borderColor: COLORS.primary }}
                                        onPress={() => { }}
                                    />
                                </View>
                            );
                        })
                    }
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    categoriesText: {
        alignItems: 'flex-start',
        width: '100%',
        paddingHorizontal: 16,
        marginTop: "12%"
    }
});
