import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function Forecast(props) {
    return (
    <View style={styles.Space}>
        <Text>{props.main}</Text>
        <Text>{props.description}</Text>
        <View styles={styles.Row}> 
            <Text>Tempurature: {props.temp} °C</Text>
            <Text>Pressure: {props.pressure} Pa</Text>
            <Text>Humidity: {props.humidity} %</Text>
            <Image  
                 style={styles.tinyLogo}
                 source={{
                     uri: 'http://openweathermap.org/img/wn/'+props.icon+'@2x.png',
                 }}
             />
        </View>
    </View>

    )
}

const styles = StyleSheet.create({    
    Row:{
        alignItems: 'center',
        flexDirection: 'row',
    },
    Space:{
        flexDirection: 'column',
        justifyContent:'space-evenly',
        height:'40%'
    },
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
})   