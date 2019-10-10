import React, { Component } from 'react';
import styles from './HomeStyles'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import api from '../../services/api';
import {Button} from "react-native-elements";

export default class Home extends Component {
    static navigationOptions = {
        title: "Atividades"
    };

    state = {
        id: 1,
        activities: []
    }

    componentDidMount() {
        this.loadActivities();
    }

    componentWillUnmount() {
    }

    loadActivities = async () => {
        try {
            api.get(`/users/${1}/activities`)
                .then(res => {
                    const activities = res.data;
                    this.setState({activities})
                })

        } catch (e) {
            console.log("erro aqui")
        }
    };



    renderItem = ({ item }) => (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.name}</Text>
            <Text style={styles.productDescription}>Status: {item.status}</Text>

            <TouchableOpacity
                style={styles.productButton}
                onPress={() => {
                    this.props.navigation.navigate('Description', { product: item });
                }}>
                <Text style={styles.productButtonText}>Descrição</Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        const { id } = this.state

        return (
            <View style={{flex: 1, paddingTop: 50, paddingLeft: 5}}>
                <View style={styles.loginFormView}>

                    <Button
                        buttonStyle={styles.loginButton}
                        onPress={() => {
                            this.props.navigation.navigate('CreateActivity', { userId: id });
                        }}
                        title="Add Atividade"
                    />
                </View>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.activities}
                    keyExtractor={item => item.id}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}