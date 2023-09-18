import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import { View, Text, SafeAreaView } from 'react-native'
import SearchBar from '../components/SearchBar'

export default function Home() {
    return (
        <SafeAreaView style={{backgroundColor:  "grey", flex: 1 }}>
            <View style= {{backgroundColor: "white", padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
        </SafeAreaView>
    )
}