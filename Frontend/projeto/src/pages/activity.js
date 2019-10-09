import React from 'react';
import { Text } from 'react-native';

const Activity = ({ navigation }) => (
        <Text>{navigation.state.params.product.url}</Text>
);

Activity.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.product.name
});

export default Activity;