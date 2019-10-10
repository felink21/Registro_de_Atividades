import React, { Component } from "react";
import styles from "./style";
import {AsyncStorage, Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';
import api from "../../services/api";

// Bug: preciso zerar o token ao voltar para tela de login,
// pois ao entrar e voltar, ele permite logar com email e password invalidos
// só porque tem o token
export default class Login extends Component {
    static navigationOptions = {
        title: "Atividades"
    };

    state = {
        id: '',
        name: '',
        token: '',
        email: '',
        password: ''
    }

    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <KeyboardAvoidingView style={styles.containerView} behavior="padding">

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.loginScreenContainer}>
                        <View style={styles.loginFormView}>
                            <Text style={styles.logoText}>Bem Vindo</Text>
                            <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                                       onChangeText={val => this.onChangeText('email', val)}/>
                            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}
                                       onChangeText={val => this.onChangeText('password', val)}/>
                            <Button
                                buttonStyle={styles.loginButton}
                                onPress={this.signIn}
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


    signIn = () => {
        const { email, password } = this.state
        if ( password === '' || email === '') {
            alert('Email/Password não informado!')
        }

        else {
            api.post(`/signin`, {email: email, password: password})
                .then(res => {
                    const id = res.data.id
                    const name = res.data.name
                    const token = res.data.token
                    this.setState({id, name, token})
                })
                .catch(msg => alert("Usuário não Cadastrado!"))
                .then(this.validator)
        }
    }

    validator = () => {
        const {navigate} = this.props.navigation;
        const { token } = this.state;
        api.post('/validateToken', {token: token})
            .then(res => {
                if (res.data){
                    alert('Bem vindo')
                    navigate('Home')
                } else {
                    //alert(res.data)
                }
            })
            .catch(msg => alert("Erro no validate"))
    }
}