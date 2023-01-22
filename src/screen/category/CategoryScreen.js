import {
    View,
    Text,
    FlatList,
    Modal,
    StyleSheet,
    StatusBar,
    Image,
    TouchableHighlight
} from 'react-native';
import React, { useState } from 'react';
import CustomHeader from '../../component/CustomHeader';
import { commonStyles } from '../../utils/Styles';
import { COLORS, SIZES } from '../../constants/theme';

export default function CategoryScreen({ navigation }) {
    const [categories, setCategories] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}>
            <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
            <CustomHeader title="Category" />

            <View style={{ alignItems: 'center' }}>
                <FlatList
                    data={categories}
                    numColumns={2}
                    contentContainerStyle={{ backgroundColor: '#fff', alignItems: 'center' }}
                    columnWrapperStyle={{
                        justifyContent: 'space-between',
                        paddingHorizontal: 10
                    }}
                    renderItem={({ item }) => {
                        return renderSingleItem(item, navigation);
                    }}
                />
            </View>
        </View>
    );
}

function renderSingleItem(item, navigation) {
    return (
        <TouchableHighlight
            underlayColor="#eee"
            onPress={() => {
                navigation.navigate('ProductDetailsScreen', {
                    product: item,
                });
            }}>
            <View style={styles.container}>
                <View style={styles.menuItem}>
                    <Image
                        source={require("../../assets/prod/i10.webp")}
                        resizeMode="stretch"
                        style={{ width: "100%", height: 110, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                    />
                </View>
                <Text
                    style={{ ...commonStyles.fs13_400, textAlign: 'center', margin: 15 }}>
                    {"0.Special Offer"}
                </Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        width: SIZES.width / 2 - 30,
        borderWidth: 0.7,
        borderColor: "#ddd",
        borderRadius: 8,
        margin: 10
    },
    menuItem: {
        backgroundColor: '#fff',
        ...commonStyles.centerStyles,
        borderRadius: 10,
    },
});
