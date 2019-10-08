import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import api from '../services/api';

export default class Main extends Component {
    static navigationOptions = {
        title: "Atividades"
    };

    state = {
        pokemon: [],
    }

    componentDidMount() {
        this.loadActivities();
    }

    loadActivities = async () => {
        try {
            api.get('')
                .then(res => {
                    const pokemon = res.data.results;
                    this.setState({pokemon})
                })

        } catch (e) {
            console.log("erro aqui")
        }
    };

    renderItem = ({ item }) => (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.name}</Text>
            <Text style={styles.productDescription}>{item.url}</Text>

            <TouchableOpacity style={styles.productButton} onPress={() => {}}>
                <Text style={styles.productButtonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            <View style={{flex: 1, paddingTop: 50, paddingLeft: 5}}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.pokemon}
                    keyExtractor={item => item.id}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },

    list: {
        padding: 20
    },

    productContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },

    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#333"
    },

    productDescription: {
        fontSize: 16,
        color: '#999',
        marginTop: 5,
        lineHeight: 24
    },

    productButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#DA552F',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },

    productButtonText: {
        fontSize: 16,
        color: '#DA552F',
        fontWeight: 'bold'
    }
});