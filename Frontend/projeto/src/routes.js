import { createStackNavigator } from 'react-navigation';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Main from './pages/main';
import Activity from "./pages/activity";

export default createStackNavigator(
    {
        Login,
        Register,
        Main,
        Activity
    },
    {
        navigationOptions: {
            headerTitleStyle :{
                textAlign: 'center',
                alignSelf: 'center'
            },
            headerStyle: {
                backgroundColor: "#4042da",
            },
            headerTintColor: "#FFF"
        }
    }
);