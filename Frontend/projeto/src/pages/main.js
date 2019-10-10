import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import api from '../services/api';

export default class Main extends Component {
    static navigationOptions = {
        title: "Atividades"
    };

    state = {
        atualUrl: '',
        pokemon: [],
        page: 0,
        count: 0
    }

    componentDidMount() {
        this.loadActivities();
    }
    
    componentWillUnmount() {
    }

    loadActivities = async (atualUrl) => {
        try {
            api.get(atualUrl)
                .then(res => {
                    const pokemon = res.data.results;
                    const atualUrl = res.next;
                    const count = res.count;
                    const page = this.state.page + 20;
                    this.setState({atualUrl, pokemon, count, page})
                })

        } catch (e) {
            console.log("erro aqui")
        }
    };

    loadMore = () => {
        const {page, count} = this.state;
        if (page === count) return;
        const url = `?offset=${page}&limit=20`;
        this.loadActivities(url)
    }

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
                    data={this.state.pokemon}
                    keyExtractor={item => item.id}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.1}

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
        borderColor: '#1a13da',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },

    productButtonText: {
        fontSize: 16,
        color: '#4042da',
        fontWeight: 'bold'
    }
});