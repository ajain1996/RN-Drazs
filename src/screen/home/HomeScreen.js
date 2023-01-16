import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  Image
} from 'react-native';
import React, { useState } from 'react';
import { home_header } from './home_header';
import HomeCarousel from './HomeCarousel';
import home_search from './home_search';
import { commonStyles } from '../../utils/Styles';
import renderCategoryItem from './renderCategoryItem';
import { COLORS } from '../../constants/theme';
import CustomButton from '../../component/CustomButton';

export default function HomeScreen({ navigation }) {
  const [categories, setCategories] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {home_header(navigation)}

      <View style={{ alignItems: 'center' }}>
        <FlatList
          data={categories}
          numColumns={3}
          style={{ backgroundColor: '#fff' }}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            padding: 9
          }}
          renderItem={({ item }) => {
            return renderCategoryItem(item, navigation);
          }}
          ListHeaderComponent={
            <View style={{ alignItems: 'center' }}>

              <View style={{ height: 250, marginBottom: 16 }}>
                <HomeCarousel />
              </View>
              {home_search(() => { })}

              <View style={styles.categoriesText}>
                <Text style={{ ...commonStyles.fs17_500 }}>
                  Categories
                </Text>
              </View>
            </View>
          }
          ListFooterComponent={
            <View style={{ padding: 30, width: "100%", backgroundColor: COLORS.primary, alignItems: "center" }}>
              <Image
                source={require("../../assets/stars.png")}
                resizeMode="stretch"
                style={{ width: "100%", height: 80 }}
              />
              <Text style={{ ...commonStyles.fs17_500, color: "#fff", marginVertical: 20 }}>
                Introducing Customer Rating
              </Text>

              <CustomButton
                fs={16} text={"See Your ratings"}
                textColor={COLORS.primary}
                bgColor={COLORS.white}
                width={200} height={54}
                onPress={() => { }}
              />
            </View>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesText: {
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 12,
    marginTop: 20
  }
});
