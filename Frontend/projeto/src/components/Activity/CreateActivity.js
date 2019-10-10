import React, { Component } from "react";
import styles from "../Login/style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';
//import Home from "../Home/Home";
import api from '../../services/api';

//const userId = ({ navigation }) => (navigation.state.params.product.userId);

export default class CreateActivity extends Component {
    static navigationOptions = {
        title: "Criar Atividade",
    };

    state = {
        name: '',
        userId: '',
        description: '',
        status: ''
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
                            <Text style={styles.logoText}>Criar Atividade</Text>
                            <TextInput placeholder="Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                                       onChangeText={val => this.onChangeText('name', val)} />
                            <TextInput placeholder="Description" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                                       onChangeText={val => this.onChangeText('description', val)}/>
                            <TextInput placeholder="Status" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                                       onChangeText={val => this.onChangeText('status', val)}/>
                            <Button
                                buttonStyle={styles.loginButton}
                                onPress={this.newActivity}
                                title="Adicionar (não funciona)"
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

    newActivity = async () => {
        const { name, description, status } = this.state
        //const { id } = Pegar o id do usuário logado

        if (name === '' || description === '' || status === '') alert('Preencha os campos!')

        api.post(`/activities`, {name, description, status})
            .then(res => {
                const name = res.data.name
                const description = res.data.description
                const status = res.data.status
                //const userId = res.data.userId      Jogar id do user logado automaticamente
                this.setState({name, description, status})
            })
            .catch(msg => alert("Não implementado!"))


    };
}