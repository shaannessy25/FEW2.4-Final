import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";
import Home from './screens/HomeScreen'
import Details from './screens/DetailsScreen'

const Tab = createBottomTabNavigator();

function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused ? "ios-home" : "ios-home";
              } else if (route.name === "Details") {
                iconName = focused ? "ios-pie" : "ios-pie";
              } 
              return <Ionicons name={iconName} size={32} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "#f00",
            inactiveTintColor: "#CC8B86",
              style: {
                backgroundColor: "#000",
              }
          }}
    
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Details" component={Details} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
