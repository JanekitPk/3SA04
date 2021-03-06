import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { ImageBackground,FlatList, View, Text, StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Bangkok', code: '10100' },
    { place: 'Phuket', code: '83000' },
   ]
   

const ZipItem = ({place, code, navigation}) => (
        <TouchableHighlight onPress={() => {
        navigation.navigate('Weather',{zipCode: code})
        }}>   
             <View style={styles.ZipItem}> 
                    <Text>{place}</Text>
                    <Text>{code}</Text> 
              </View> 
        </TouchableHighlight>
)

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <FlatList
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
        />    
    )
}

const styles = StyleSheet.create({
    ZipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    zipPlace: {
        flex: 1,
    },
    zipCode: {
        flex: 1,
    },
    backdrop: {
        flexDirection: 'column',
        width: '10%',
        height:'100%'
    },
})