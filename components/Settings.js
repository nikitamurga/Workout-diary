import * as React from 'react';
import { useContext } from 'react';
import { Alert, View } from 'react-native';
import { RadioButton, Text, Card } from 'react-native-paper';
import Styles from "../styles/Styles";
import { UnitsContext } from './Contexts';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Settings() {
    const { units, setUnits } = useContext(UnitsContext);
    const [value, setValue] = React.useState('km');


    function handleUnits(value) {
        setValue(value)
        setUnits(value)
        Alert.alert('Units changed to ' + value);
        console.log(units)
    }

    return (
        <SafeAreaView style={Styles.container} >
            <Text variant='headlineLarge' style={Styles.label}>Settings:</Text>
            <Card style={Styles.card}>
                <Text variant='headlineSmall' style={Styles.label}
                >Units: </Text>
                <RadioButton.Group onValueChange={handleUnits} value={value}>
                    <View style={Styles.radioButton}>
                        <Text>Kilometers:</Text>
                        <RadioButton value="km" />
                    </View>
                    <View style={Styles.radioButton}>
                        <Text>Miles:</Text>
                        <RadioButton value="mi" />
                    </View>
                </RadioButton.Group>
            </Card>
        </SafeAreaView>
    )
}