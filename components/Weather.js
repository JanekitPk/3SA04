import React,{useEffect,useState} from 'react'
import {ImageBackground, Text, StyleSheet, View} from 'react-native'
import Forecast from './Forecast';

export default function Weather(props) {
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&appid=28c099ab9b2578c63715272399321025`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    //main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp,
                    pressure: json.main.pressure,
                    humidity: json.main.humidity,
                    icon: json.weather[0].icon,
                    });
                })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])

    const [forecastInfo,setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
        pressure: 0,
        humidity: 0,
        icon: '-'
    })

    return (
        //แปลงข้อมูลทั้งหมดเป็น props ให้ Forecast.js
        <ImageBackground source={require('../bg.png')} style={styles.backdrop}>
            <View style={styles.BBlack}>
                <Text style={styles.BText}>Zip Code</Text>
                <Text style={styles.BText}>{props.zipCode}</Text>
                <Forecast {...forecastInfo}/> 
            </View>
        </ImageBackground>
    );
   }


   const styles = StyleSheet.create({    //กำหนด backdrop style 
        backdrop: {
            flexDirection: 'column',
            width: '100%',
            height:'100%'
        },
        BText: {
            fontSize: 40
        },
        BBlack:{
            justifyContent: 'center', //center แนวแกนตั้ง
            alignItems: 'center', //center แนวแกนนอน
            backgroundColor: 'rgba(0,0,0,0.3)',
            height:'50%',
            width:'100%'
        }
   })