import { Pressable, Alert } from "react-native";
import { useContext, useEffect, useState } from "react";
import { Button, Modal, Portal, Text, TextInput, SegmentedButtons } from "react-native-paper";
import { Calendar } from "react-native-calendars";
import Styles from "../styles/Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { WorkoutContext } from "./Contexts";

export default function AddWorkout() {

    const allTest = [
        { distance: 2, duration: 10, selection: 'run', date: '12.3.2023' },
        { distance: 4, duration: 10, selection: 'bike', date: '12.3.2023' },
        { distance: 1, duration: 3, selection: 'swim', date: '12.3.2023' },
    ]

    useEffect(() => {
        setWorkout((prev) => [...prev, ...allTest]);

    }, []);

    const buttons = [
        { label: 'Run', icon: 'run', value: 'run' },
        { label: 'Bike', icon: 'bike', value: 'bike' },
        { label: 'Swim', icon: 'swim', value: 'swim' },
    ]
    const [selection, setSelection] = useState(buttons[0].value);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState('');

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const { setWorkout } = useContext(WorkoutContext);

    function dateSelected(day) {
        const selectedDate = new Date(day.dateString);
        setVisible(false);
        setDate(selectedDate.toLocaleDateString('fi-FI'));
    }

    function addWork() {
        if (!distance || !duration || !date) {
            Alert.alert('Please fill in all fields');

        } else {
            setWorkout(prev => [...prev, { distance, duration, date, selection }]);
            setDistance('');
            setDuration('');
            setDate('');
        }
    }

    return (
        <SafeAreaView style={Styles.container}>
            <Text variant='headlineLarge' style={Styles.label}>Workout</Text>
            <SegmentedButtons style={Styles.segbut}
                value={selection}
                onValueChange={setSelection}
                buttons={buttons}
            ></SegmentedButtons>
            <TextInput style={Styles.disDu}
                keyboardType="number-pad"
                mode='outlined'
                label='Distance (km)'
                value={distance}
                onChangeText={setDistance}
            ></TextInput>
            <TextInput style={Styles.disDu}
                keyboardType="number-pad"
                mode='outlined'
                label='Duration (min)'
                value={duration}
                onChangeText={setDuration}
            ></TextInput>
            <Portal >
                <Modal visible={visible} onDismiss={hideModal} >
                    <Calendar onDayPress={dateSelected}></Calendar>
                    <Pressable onPress={() => setVisible(true)}>
                    </Pressable>
                </Modal>
            </Portal>
            <Button mode="contained-tonal"
                style={Styles.button}
                onPress={showModal}
                icon="calendar">
                {date ? date : ' Date'}
            </Button>
            <Button mode="contained tonal"
                style={Styles.button2}
                onPress={addWork}>Add</Button>
        </SafeAreaView>
    );
}