import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {theme} from '../constants'

class Button extends React.Component {
    render () {
        const {title, onPress} = this.props;
        return (
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.label}>{title}</Text> 
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.SECONDARY,
        paddingVertical: theme.size.base * 2,
        alignItems: 'center',
        borderRadius: 25,
        shadowColor: theme.colors.ONBACKGROUND,
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.16,
        shadowRadius: 6,
        elevation: 6
    },
    label: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: '600',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: theme.colors.ONSECONDARY
    }
});

export default Button;
