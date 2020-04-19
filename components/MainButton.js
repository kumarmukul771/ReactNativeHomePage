import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DefaultStyles from '../constants/deafultStyles';
import { Ionicons } from '@expo/vector-icons';

const MainButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.8}>
            <View style={{ ...styles.button, ...props.style }}>
                <View style={styles.content}>
                    <Text style={styles.buttonText}>{props.children}</Text>
                </View>
                <View>
                    <Ionicons name="md-arrow-round-forward" size={20} color="white" />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderRadius: 30,
        margin: 10,
        backgroundColor: 'rgb(82, 195, 210)',
        paddingHorizontal: 30
    },
    buttonText: {
        fontFamily: 'open-sans',
        color: 'white'
    },
    content: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        width: '100%'
    }
})

export default MainButton;