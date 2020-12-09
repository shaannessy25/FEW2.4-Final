import React from 'react';
import { SafeAreaView, View, FlatList, Text, StyleSheet, TouchableHighlight} from 'react-native'
import Data from '../metal.json'

export default function Home() {

    const data = Data.map((item, index) => {
        return {
            name: item.band_name,
            origin: item.origin,
            fans: item.fans,
            formed: item.formed,
        }
    })
    const Item = ({ name, origin, fans, formed }) => (
        <View >
          <Text>{name}</Text>
          <Text>{origin}</Text>
          <Text>{fans}</Text>
          <Text>{formed}</Text>
        </View>
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
        <SafeAreaView>
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
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
    listContainer: {
      width: "100%",
    },
  });