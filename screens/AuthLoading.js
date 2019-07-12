import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    View
} from 'react-native';

class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    };

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    render() {
        return (
            <View>
                <ActivityIndicator />
            </View>
        );
    };
};

export default AuthLoadingScreen;
