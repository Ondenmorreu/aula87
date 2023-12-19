import React, { Component } from "react";
import { Text, View } from "react-native";
import firebase from "firebase";

export default class Logout extends Component {
    componentDidMount() {
        firebase.auth().singOut();
        this.props.navigation.replace("Login");
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alingItems: "center" }}>
                <Text>Tela de Logout</Text>;
            </View>
        )
    }
}

























































































