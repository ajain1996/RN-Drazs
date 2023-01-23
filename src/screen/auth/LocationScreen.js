import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import CustomDropdown from '../../component/CustomDropdown'
import LocationHeader from './LocationHeader'

const countryData = [
    { label: 'Saudi Arabia', value: 'Saudi Arabia' },
];

const cityData = [
    { label: 'Jeddah', value: 'Jeddah' },
];

const districtData = [
    { label: 'Al Adel', value: 'Al Adel' },
    { label: 'Al Ajaweed', value: 'Al Ajaweed' },
    { label: 'Al Ajwad', value: 'Al Ajwad' },
    { label: 'Al Ammariyah', value: 'Al Ammariyah' },
    { label: 'Al Ammwaj', value: 'Al Ammwaj' },
    { label: 'Al Andalus', value: 'Al Andalus' },
    { label: 'Al Asalah', value: 'Al Asalah' },
    { label: 'Al Aziziyah', value: 'Al Aziziyah' },
];

export default function LocationScreen({ navigation }) {
    const [country, setCountry] = React.useState("");
    const [state, setState] = React.useState("");
    const [city, setCity] = React.useState("");
    const [next, setNext] = React.useState(false);

    React.useEffect(() => {
        console.log("\n\n Country, State, City: ", country, state, city);
        if (next) {
            navigation?.navigate("Root");
        }
    }, [next])

    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
            <LocationHeader />
            <ScrollView>
                <Text />
                <CustomDropdown
                    placeholder="Select Country"
                    width="100%"
                    data={countryData}
                    myStyles={[styles.dropdown]}
                    myContainer={{ paddingHorizontal: 0 }}
                    onChange={(val) => {
                        setCountry(val)
                    }}
                />

                <CustomDropdown
                    placeholder="Select City"
                    width="100%"
                    data={cityData}
                    myStyles={styles.dropdown}
                    myContainer={{ paddingHorizontal: 0 }}
                    onChange={(val) => {
                        setState(val)
                    }}
                />

                <CustomDropdown
                    placeholder="Select District"
                    width="100%"
                    data={districtData}
                    myStyles={styles.dropdown}
                    myContainer={{ paddingHorizontal: 0 }}
                    onChange={(val) => {
                        setCity(val);
                        setNext(true);
                    }}
                />
            </ScrollView>
            <Text>LocationScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    dropdown: {
        elevation: 0,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        borderRadius: 0,
        marginTop: -30
    },
    topDropdown: {
        borderTopWidth: 1,
        borderTopColor: "#ccc"
    }
})