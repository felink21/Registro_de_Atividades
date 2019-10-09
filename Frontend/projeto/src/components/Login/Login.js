import React, { Component } from "react";
import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';

export default class Login extends Component {
    static navigationOptions = {
        title: "Atividades"
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <KeyboardAvoidingView style={styles.containerView} behavior="padding">

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.loginScreenContainer}>
                        <View style={styles.loginFormView}>
                            <Text style={styles.logoText}>Bem Vindo</Text>
                            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
                            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
                            <Button
                                buttonStyle={styles.loginButton}
                                onPress={() => navigate('Main')}
                                title="Login"
                            />
                            <View style={styles.loginFormView}>

                            </View>
                            <View style={styles.loginFormView}>
                                <Button
                                    buttonStyle={styles.loginButton}
                                    onPress={() => navigate('Register')}
                                    title="Cadastrar"
                                />
                            </View>
                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    onLoginPress() {
        // Chamar o /signin do Backend Node
    }
}