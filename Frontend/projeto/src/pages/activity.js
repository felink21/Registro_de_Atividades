import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Activity = ({ navigation }) => (
    <View style={styles.productContainer}>
        <Text style={styles.productTitle}>{navigation.state.params.product.url}</Text>
    </View>
);

Activity.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.product.name
});

const styles = StyleSheet.create({
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
    }});

export default Activity;