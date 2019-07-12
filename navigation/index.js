import React from 'react';
import { createSwitchNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import Login from '../screens/Login';
import Movements from '../screens/Movements';
import AuthLoading from '../screens/AuthLoading';

const AppStack = createStackNavigator({
    Movements
});

const AuthStack = createStackNavigator({
    Login
}, {
    headerMode: 'none'
});

export default createAppContainer(createSwitchNavigator({
    AuthLoading,
    App: AppStack,
    Auth: AuthStack
}, {
    initialRouteName: 'AuthLoading',
}));
