import { createStackNavigator } from 'react-navigation';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from "./components/Home/Home";
import Description from "./components/Activity/Description";
import CreateActivity from "./components/Activity/CreateActivity";
import Main from './pages/main';
import Activity from "./pages/activity";

export default createStackNavigator(
    {
        Login,
        Home,
        Description,
        Register,
        Main,
        Activity,
        CreateActivity
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