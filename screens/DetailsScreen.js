import React from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, TouchableHighlight, ScrollView } from 'react-native'
import Data from '../metal.json'

export default function Details() {

    const totalBands = Data.reduce((acc, band) => {
        acc = acc + 1
        return acc
    }, 0)
    const totalFans = Data.reduce((acc, band) => {
        acc = acc + (band.fans * 1000)
        return acc
    }, 0)

    const totalCountry = Data.reduce((acc, band) => {
        if(band.origin == ''){
            acc = acc + 1
        }
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
        <SafeAreaView>
            <ScrollView>
                <Text>
                    Count: {totalBands}
                </Text>
                <Text>
                    Fans: {totalFans}
                </Text>
                <Text>
                    Countries: {totalCountry}
                </Text>
                <Text>
                    Active: {active}
                </Text>
                <Text>
                    Split: {split}
                </Text>
            </ScrollView>

        </SafeAreaView>
    )
}