import { View, Text } from 'react-native'
import React from 'react'
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete"
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Linking } from 'react-native';
import { GOOGLE_PLACES_KEY } from "@env";

export default function SearchBar({cityHandler}) {

  return (
    <View style={{marginTop: 15, flexDirection: "row"}}>
      <GooglePlacesAutocomplete 
      query={{key: GOOGLE_PLACES_KEY}}
      onPress={(data, details = null) => {
        const city = data.description.split(",")[0]
        console.log(city)
        cityHandler(city)
      }}
      placeholder='Search' 
      styles={{
        textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
        },
        textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50, 
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10
        }
      }}
      
      renderLeftButton={() =>(
      <View style={{marginLeft: 10}}>
        <Ionicons name="location-sharp" size={24} />
      </View>
     )}

     renderRightButton={() => (
        
        <View style={{
            flexDirection: 'row',
            marginRight: 8,
            backgroundColor: "white",
            padding: 9,
            borderRadius: 30,
            alignItems: "center"
        }}>
            <AntDesign name='clockcircle' size={11} style={{marginRight: 6}}/>
            <Text>Search</Text>
        </View>
        
     )}
      />
    </View>
  )
}