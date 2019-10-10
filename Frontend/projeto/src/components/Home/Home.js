import React, { Component } from 'react';
import styles from './HomeStyles'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import api from '../../services/api';

export default class Home extends Component {
    static navigationOptions = {
        title: "Atividades"
    };

    state = {

        activities: []
    }

    componentDidMount() {
        this.loadActivities();
    }

    componentWillUnmount() {
    }

    loadActivities = async (atualUrl) => {
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
            {/*<Text style={styles.productDescription}>{item.url}</Text>*/}

            <TouchableOpacity
                style={styles.productButton}
                onPress={() => {
                    this.props.navigation.navigate('Activity', { product: item });
                }}>
                <Text style={styles.productButtonText}>Descrição</Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            <View style={{flex: 1, paddingTop: 50, paddingLeft: 5}}>
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