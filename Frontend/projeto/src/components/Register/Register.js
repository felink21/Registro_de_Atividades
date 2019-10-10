import React, { Component } from "react";
import styles from "../Login/style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';
import api from '../../services/api';

export default class Register extends Component {
    static navigationOptions = {
        title: "Atividades",
    };

    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <KeyboardAvoidingView style={styles.containerView} behavior="padding">

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.loginScreenContainer}>
                        <View style={styles.loginFormView}>
                            <Text style={styles.logoText}>Cadastro</Text>
                            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                                       onChangeText={val => this.onChangeText('name', val)} />
                            <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                                       onChangeText={val => this.onChangeText('email', val)}/>
                            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}
                                       onChangeText={val => this.onChangeText('password', val)}/>
                            <TextInput placeholder="Confirm Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}
                                       onChangeText={val => this.onChangeText('confirmPassword', val)}/>
                            <Button
                                buttonStyle={styles.loginButton}
                                onPress={this.signUp}
                                title="Cadastrar"
                            />
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

    signUp = async () => {
        const {navigate} = this.props.navigation;
        const { name, email, password, confirmPassword } = this.state

        if ( password !== confirmPassword) {
            alert('Passwords não Compatíveis!')
            navigate('Login')
            navigate('Register')

        } else {
            api.post(`/signup`, {name: name, email: email, password: password, confirmPassword: confirmPassword})
                .then(function (response) {
                    alert('Cadastrado com Sucesso!')
            })
            navigate('Login')
        }
    }
}