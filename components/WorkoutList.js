import { useContext } from "react";
import { Text, Card, Avatar, Chip } from "react-native-paper";
import { UnitsContext, WorkoutContext } from "./Contexts";
import { FlatList, View } from "react-native";
import Styles from "../styles/Styles";
import { SafeAreaView } from "react-native-safe-area-context";


export default function WorkoutList() {

    const { workout } = useContext(WorkoutContext);
    const { units } = useContext(UnitsContext);

    function sum(sport) {
        let summa = 0;
        for (let i = 0; i < workout.length; i++) {
        if (workout[i].selection === sport) {
            summa += +workout[i].distance;
        }
        }
        return summa;
    }

    const sumRun = units === 'miles' ? (sum('run') / 1.60934).toFixed(2) : sum('run');
    const sumBike = units === 'miles' ? (sum('bike') / 1.60934).toFixed(2) : sum('bike');
    const sumSwim = units === 'miles' ? (sum('swim') / 1.60934).toFixed(2) : sum('swim');

    return (
        <SafeAreaView style={Styles.container}>
        <Text variant='headlineLarge' style={Styles.label}>My Workouts</Text>
        <View style={Styles.chipView}>
            <Chip style={Styles.chip} icon='run'> {sumRun} {units}</Chip>
            <Chip style={Styles.chip} icon='bike'>{sumBike} {units}</Chip>
            <Chip style={Styles.chip} icon='swim'> {sumSwim} {units}</Chip>
        </View>
        <FlatList style={Styles.flatlist}
            data={workout}
            renderItem={({ item }) => <Item workout={item} units={units} />} />
        </SafeAreaView>
    );
    }

    function Item({ workout, units }) {

    const distance = units === 'miles' ? (workout.distance / 1.60934).toFixed(2) : workout.distance;

    return (
        <View style={Styles.border}>
        <Card>
            <Card.Title
            title={workout.date}
            left={(props) => <Avatar.Icon {...props} icon={workout.selection} />}
            />
            <Card.Content>
            <Text>{('Distance: ') + distance + (' ') + units} </Text>
            <Text>{('Duration: ') + workout.duration + (' min')}</Text>
            </Card.Content>
        </Card>
        </View>
    );
}