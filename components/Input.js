import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

import {theme} from '../constants';

class Input extends React.Component {
    state = {
        active: false
    }
    handleToggleFocus = () => {
        const {active} = this.state;
        this.setState({active: !active});
    };
    render() {
        const {
            email, 
            password, 
            ...otherProps
        } = this.props;
        let kbType = 'default';
        if (email)
            kbType = 'email-address';

        const {active} = this.state;
        const inputStyles = [
            styles.input,
            active && styles.active
        ];
        
        return (
            <TextInput 
                keyboardType={kbType}
                secureTextEntry={password}
                {...otherProps}
                onFocus={this.handleToggleFocus}
                onBlur={this.handleToggleFocus}
                style={inputStyles}
            />
        );
    }
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: theme.colors.SURFACE,
        borderColor: theme.colors.SURFACE,
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 3,
        shadowColor: theme.colors.ONBACKGROUND,
        shadowOpacity: 0.16,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 6,
        marginBottom: 16,
        fontSize: 16,
        fontWeight: 'normal',
        color: theme.colors.ONBACKGROUND,
        lineHeight: 19,
        textAlign: 'left'
    },
    active: {
        borderColor: theme.colors.SECONDARY,
        shadowColor: theme.colors.SECONDARY
    }
});

export default Input;
