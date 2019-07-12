import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import logo from '../assets/images/InsertCoin.png';
import {strings, theme} from '../constants';
import {Button, Input} from '../components';

class Login extends React.Component {
    state = {
        email: "",
        password: ""
    };

    handleChangeText = (field, text) => {
        this.setState({
            [field]: text
        });
    };

    render () {
        const {email, password} = this.state;
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
                <View style={styles.form}>
                    <Input 
                        email
                        placeholder={strings.login.EMAIL_PLACEHOLDER}
                        value={email}
                        onChangeText={(email) => this.handleChangeText('email', email)}
                    />
                    <Input
                        password
                        placeholder={strings.login.PWD_PLACEHOLDER}
                        value={password}
                        onChangeText={(password) => this.handleChangeText('password', password)}
                    />
                    <Text style={styles.forgot}>
                        {strings.login.PWD_FORGOT}
                    </Text>
                    <Button />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.BACKGROUND,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginTop: theme.size.base * 15
    },
    form: {
        marginTop: theme.size.base * 17,
        width: theme.size.base * 35,
        flex: 1
    },
    forgot: {
        color: theme.colors.PRIMARY,
        fontSize: 14,
        fontWeight: 'normal',
        lineHeight: 16,
        alignSelf: 'flex-end',
        marginBottom: theme.size.base * 6
    }
})
export default Login;
