import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const Description = ({ navigation }) => (
    <View style={styles.productContainer}>
        <Text style={styles.productTitle}>Descrição da Atividade: </Text>
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{navigation.state.params.product.description}</Text>
        </View>
    </View>

);

Description.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.product.name
});

const styles = StyleSheet.create({
    productContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },

    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#333"
    },

    productPhoto: {
        width: 50,
        height: 50,
        paddingLeft: 300,
        paddingTop: 300
    }
});

export default Description;