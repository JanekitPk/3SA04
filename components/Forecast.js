import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Forecast(props) {
    return (
    <View>
        <Text>{props.main}</Text>
        <Text>{props.description}</Text>
        <Text style={styles.Temp}>{props.temp}</Text>
        <Text style={styles.Temp}>°C</Text>
    </View>
    )
}

const styles = StyleSheet.create({    
    Temp: {
        flexDirection: 'row',
        fontSize: 20

    }
})   