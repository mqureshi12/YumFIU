import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Linking } from 'react-native';

export default function HeaderTabs(props) {
    return (
        <View>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Image
                style={{ height: 50, width: 100 }}
                source={require('../../assets/images/fiu.jpg')}
            />
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <Text style={{ color: 'purple'}} onPress={() => Linking.openURL('https://tinyurl.com/42u88mr6')}>
                    Complete Survey for YumFIU Here! {"\n"}
                </Text>
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <HeaderButton 
                    text="Delivery" 
                    btnColor="black" 
                    textColor="white" 
                    activeTab={props.activeTab} 
                    setActiveTab={props.setActiveTab} 
                />
                <HeaderButton 
                    text="Pickup" 
                    btnColor="white" 
                    textColor="black" 
                    activeTab={props.activeTab} 
                    setActiveTab={props.setActiveTab} 
                />
            </View>
        </View>
    )
}

const HeaderButton = (props) => (
    <TouchableOpacity style={{
        backgroundColor: props.activeTab === props.text ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}
    >
        <Text 
        style={{ color: props.activeTab === props.text ? "white" : "black", fontSize: 15, fontWeight: "900" }}>{props.text}
        </Text>
    </TouchableOpacity>
);