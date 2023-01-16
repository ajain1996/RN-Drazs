import { View, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { commonStyles } from '../../utils/Styles';
import { image_tap, image_tap2 } from '../../component/image_tap';
import Auth from '../../service/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../redux/reducer/user';
// import { CustomDrawer } from '../../component/drawer/CustomDrawer';
import { COLORS } from '../../constants/theme';
import { TouchableHighlight } from 'react-native';
import { removeUserType } from '../../redux/reducer/userType';
import { Alert } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

export function home_header(navigation) {
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.User);
  const { userType } = useSelector(state => state.UserType);
  const onFocus = useIsFocused();
  const [switchModal, setSwitchModal] = useState(false);
  const [modalVisible, setmodalVisible] = React.useState(false);

  const handleLogout = () => {
    Auth.logout().then(() => {
      dispatch(removeUser([]));
      dispatch(removeUserType());
    });
  };

  return (
    <>
      {/* <View style={styles.headerContainer}>
        <TouchableHighlight
          underlayColor="#eee"
          onPress={() => {
            console.log('Open drawer');

            // openModal();

            setSwitchModal(true);
          }}
          style={styles.img_container}>
          <Image
            source={require('../../assets/menu.png')}
            style={{ width: 22, height: 22 }}
          />
        </TouchableHighlight>
      </View> */}

      {/* <CustomDrawer
        modalVisible={switchModal}
        callback={() => {
          console.log('open drawer false');
          setSwitchModal(false);
        }}
        navigation={navigation}
      /> */}
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    ...commonStyles.rowBetween,
    width: '100%',
    height: 60,
    elevation: 9,
    shadowColor: '#999',
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    borderBottomColor: '#eee',
    borderBottomWidth: 2,
  },
  loginBtn: {
    padding: 8,
    backgroundColor: COLORS.theme,
    borderRadius: 6,
    paddingHorizontal: 12,
    marginRight: 10,
  },
  img_container: {
    width: 50,
    height: 50,
    borderRadius: 100,
    ...commonStyles.centerStyles,
  },
});
