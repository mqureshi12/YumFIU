import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const items = [
    {
        text: "Pick Up"
    },
    {
        text: "The Market at Breezeway"
    },
    {
        text: "Fast Food"
    }
]

export default function Categories() {
  return (
    <View style={{
        marginTop: 5,
        backgroundColor: "white",
        paddingVertical: 10,
        paddingLeft: 20
    }}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {items.map((item, index) => ( 
     <View key={index} style={{alignItems: 'center', marginRight: 30}}>
      <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text> 
    </View>
    ))}
    </ScrollView>
    </View>
  )
}