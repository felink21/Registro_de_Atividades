import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Activity from "./pages/activity";

export default createStackNavigator(
    {
        Main,
        Activity
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#DA552F"
            },
            headerTintColor: "#FFF"
        }
    }
);