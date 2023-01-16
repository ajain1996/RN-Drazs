import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import React from 'react';
import { commonStyles } from '../../utils/Styles';
import { SIZES } from '../../constants/theme';
import { imageBase } from '../auth/UpdateUserScreenIn';

export default function renderCategoryItem(item, navigation) {
  //   console.log(item.image1, '\n\n\n\n\n item');
  return (
    <TouchableHighlight
      underlayColor="#eee"
      style={styles.container}
      onPress={() => {
        navigation.navigate('ProductSubCategoryScreen', {
          product: item,
        });
      }}>
      <View style={{ width: SIZES.width / 3.5, borderWidth: 0.7, borderColor: "#ddd", borderRadius: 5 }}>
        <View style={styles.menuItem}>
          <Image
            source={require("../../assets/prod/i10.webp")}
            resizeMode="stretch"
            style={{ width: "100%", height: 80, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
          />
        </View>
        <Text
          style={{ ...commonStyles.fs13_400, textAlign: 'center', margin: 8 }}>
          {"0.Special Offer"}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    // paddingVertical: 15,
    width: '31.5%',
    ...commonStyles.centerStyles,
    borderRadius: 4,
  },
  menuItem: {
    backgroundColor: '#fff',
    ...commonStyles.centerStyles,
    borderRadius: 10,
  },
});
