import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function Forecast(props) {
    return (
    <View style={styles.Space}>
        <View style={styles.Cen}>
            <Text style={styles.Bfont}>Weather Info</Text>
            <Text style={styles.Bfont}>{pad(new Date().getHours()) + ":" + pad(new Date().getMinutes())}</Text>
        </View>
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
            <Text>{props.description}</Text>    
        </View> 
    </View>

    )
}
function pad(value) {
    if(value < 10) {
        return '0' + value;
    } else {
        return value;
    }
}
const styles = StyleSheet.create({    
    Row:{
        alignItems: 'center',
        flexDirection: 'row',
    },
    Bfont:{
        fontSize: 20
    },
    Cen:{
        alignItems: 'center'
    },
    Space:{
        flexDirection: 'column',
        justifyContent:'space-evenly',
        height:'60%'
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
})   