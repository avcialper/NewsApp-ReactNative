import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'azure',
        margin: 10,
        borderRadius: 10,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
    },
    inner_container: {
        padding: 10,
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    description: {
        color: 'black',
        marginTop: 3,
    },
    author: {
        color: 'black',
        fontStyle: 'italic',
        textAlign: 'right',
    },
})