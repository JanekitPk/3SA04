import React,{useState} from 'react'
import {ImageBackground, Text, StyleSheet} from 'react-native'
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo,setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })

    return (
        //แปลงข้อมูลทั้งหมดเป็น props ให้ Forecast.js
        <ImageBackground source={require('../bg.png')} style={styles.backdrop}>
            <Text style={styles.BText}>Zip Code</Text>
            <Text style={styles.BText}>{props.zipCode}</Text>
            <Forecast {...forecastInfo}/> 
        </ImageBackground>
    );
   }

   const styles = StyleSheet.create({    //กำหนด backdrop style 
        backdrop: {
            flexDirection: 'column',
            justifyContent: 'center', //center แนวแกนตั้ง
            alignItems: 'center', //center แนวแกนนอน
            width: '100%',
            height:'100%'
        },
        BText: {
            fontSize: 40
        }
   })