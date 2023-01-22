import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import React from 'react';
import { commonStyles } from '../../utils/Styles';
import { SIZES } from '../../constants/theme';

export default function renderCategoryItem(item, navigation) {
  return (
    <TouchableHighlight
      underlayColor="#eee"
      style={styles.container}
      onPress={() => {
        navigation.navigate(item?.navigate, {
          product: item,
        });
      }}>
      <View style={styles.wrapper}>
        <View style={styles.menuItem}>
          <Image
            source={require("../../assets/prod/i10.webp")}
            resizeMode="stretch"
            style={{ width: "100%", height: 80, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
          />
        </View>
        <View style={{ ...commonStyles.centerStyles, height: 54 }}>
          <Text
            style={{ ...commonStyles.fs13_400, textAlign: 'center', margin: 8, alignSelf: 'center' }}>
            {item?.name}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    width: '31.5%',
    ...commonStyles.centerStyles,
    borderRadius: 4,
  },
  wrapper: {
    width: SIZES.width / 3.5,
    borderWidth: 0.7,
    borderColor: "#ddd",
    borderRadius: 5,
    // height: 136,
  },
  menuItem: {
    backgroundColor: '#fff',
    ...commonStyles.centerStyles,
    borderRadius: 10,
  },
});
