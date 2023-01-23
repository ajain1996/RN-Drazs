import { View, Text } from 'react-native'
import React from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { dropdownStyles } from '../utils/dropdownStyles';
import { SIZES } from '../constants/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function CustomDropdown({ placeholder, data, width, height, myStyles, myContainer, onChange }) {
    const [isFocus, setIsFocus] = React.useState(false);
    const [value, setValue] = React.useState("");

    const renderItem = (item) => {
        return (
            <View style={dropdownStyles.item}>
                <Text style={dropdownStyles.textItem}>{item.label}</Text>
            </View>
        );
    };

    return (
        <View style={[dropdownStyles.container, myContainer]}>
            <Dropdown
                style={[dropdownStyles.dropdown, isFocus ? { borderColor: 'blue' } : {
                    width: width ? width : SIZES.width / 1.25, alignSelf: "center", height: height ? height : 50
                }, myStyles]}
                placeholderStyle={dropdownStyles.placeholderStyle}
                selectedTextStyle={dropdownStyles.selectedTextStyle}
                inputSearchStyle={dropdownStyles.inputSearchStyle}
                iconStyle={dropdownStyles.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? placeholder : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                    onChange(item);
                }}
                renderItem={renderItem}
            />
            <MaterialCommunityIcons name='city' size={25} color="#000" style={{
                position: "absolute", top: -4, left: 20
            }} />
        </View>
    )
}