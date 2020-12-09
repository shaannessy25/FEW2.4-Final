import React from 'react';
import { SafeAreaView, View, FlatList, Text, StyleSheet, TouchableHighlight} from 'react-native'
import Data from '../metal.json'

export default function Home() {

    const data = Data.map((item, index) => {
        return {
            name: item.band_name,
            origin: item.origin,
            fans: item.fans * 1000,
            formed: item.formed,
        }
    })
    const Item = ({ name, origin, fans, formed }) => (
        <SafeAreaView style={styles.container}>
          <Text style={styles.labels}>{name}</Text>
          <Text style={styles.labels}>{formed}</Text>
          <Text style={styles.details}>{origin}</Text>
          <Text style={styles.details}>{fans}</Text>
        </SafeAreaView>
      );
    
      const renderItem = ({ item }) => (
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDD"
          onPress={() => alert('This is working')}
        >
        <Item 
            name={item.name} 
            origin={item.origin} 
            fans={item.fans}
            formed={item.formed}
        />
        </TouchableHighlight>
      );
    return(
        <SafeAreaView >
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.listContainer}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      flexDirection: 'column',
      borderBottomColor: 'white',
      borderBottomWidth: 2
    },
    listContainer: {
      width: "100%",
    },
    labels: {
      color: 'white',
      fontSize: 18,
    },
    details: {
      color: 'white',
      textAlign: 'right',
      fontSize: 18,

    }
  });