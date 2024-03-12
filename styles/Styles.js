import { StatusBar, StyleSheet } from "react-native";
import { MD3LightTheme } from "react-native-paper";

export default StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0 + 5,
        flex: 1,
        paddingHorizontal: 15,
    },

    label: {
        textAlign: "center",
        padding: 15,
        color: '#3E4E5E',
    },

    segbut: {
        padding: 10,
        height: 60,
    },

    disDu: {
        marginHorizontal: 20,
    },

    button: {
        marginTop: 20,
        marginHorizontal: 40,
        width: 180,
        height: 45,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#3E4E5E',
        backgroundColor: '#5A6273',
    },

    button2: {
        border: 2,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 30,
        marginLeft: 130,
        marginRight: 120,
        width: 150,
        height: 50,
        textAlign: "center"
    },

    chipView: {
        flexDirection: "row",
        justifyContent: 'center',
        padding: 5,
    },

    chip: {
        margin: 4,
        padding: 8,
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#5A6273',
    },

    flatlist: {
        marginHorizontal: 20,
    },

    card: {
        padding: 10,
        margin: 15,
        elevation: 3,
        borderRadius: 10,
    },

    radioButton: {
        alignItems: 'center',
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    border: {
        padding: 5,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderColor: '#CED4DA',
    },
});

export const MyTheme = {
    ...MD3LightTheme,
    roundness: 8,
    colors: {
        ...MD3LightTheme.colors,
        primary: '#5A6273',
        secondaryContainer: '#78849E',
        backdrop: '#5A6273',
    }
}