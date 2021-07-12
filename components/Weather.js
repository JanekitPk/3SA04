import React from 'react'
import {Text} from 'react-native'

export default function Weather(props) {
    const [forecastInfo,setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })

    return (
        //แปลงข้อมูลทั้งหมดเป็น props ให้ Forecast.js
        <ImageBackground source={require('../bg.png')} style={styles.backdrop}>
            <Text>Zip Code</Text>
            <Text>{props.zipCode}</Text>
            <Forecast {...forecastInfo}/> 
        </ImageBackground>
    );
   }

   const styles = StyleSheet.create({    //กำหนด backdrop style 
        backdrop: {
            alignItems: 'center',
            width: '100%',
            height:'100%'
        }
   })