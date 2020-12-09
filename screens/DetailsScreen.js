import React from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, TouchableHighlight, ScrollView } from 'react-native'
import Data from '../metal.json'

const countryName = Data.map((band) =>{
    return band.origin
})
const countryNameSet = new Set(countryName)
const countryArray = Array.from(countryNameSet)


export default function Details() {

    const totalBands = Data.reduce((acc, band) => {
        acc = acc + 1
        return acc
    }, 0)
    const totalFans = Data.reduce((acc, band) => {
        acc = acc + (band.fans * 1000)
        return acc
    }, 0)

    const totalCountry = countryArray.reduce((acc, band) => {
        acc = acc + 1
        return acc
    }, 0)

    const active = Data.reduce((acc, band) => {
        if( band.split == "-") {
            acc = acc + 1
        }
        
        return acc
    }, 0)
    const split = Data.reduce((acc, band) => {
        if( band.split !== "-"){
            acc = acc + 1
        }
        return acc
    }, 0)
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Metal Bands🤘🎸</Text>
            <ScrollView style={styles.listContainer}>
                <Text style={styles.text}>
                    Count: {totalBands}
                </Text>
                <Text style={styles.text}>
                    Fans: {totalFans}
                </Text>
                <Text style={styles.text}>
                    Countries: {totalCountry}
                </Text>
                <Text style={styles.text}>
                    Active: {active}
                </Text>
                <Text style={styles.text}>
                    Split: {split}
                </Text>
            </ScrollView>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    listContainer: {
        padding: 4,
        
    },
    labels: {
      color: 'white',
      fontSize: 18,
    },
    text: {
      color: 'white',
      textAlign: 'center',
      fontSize: 18,
    },
    title: {
        color: 'white',
        fontSize: 24,
        marginTop: 300,
        textAlign: 'center',
        fontWeight: 'bold',
    }
  });