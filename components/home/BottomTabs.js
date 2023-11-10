import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

export default function BottomTabs() {
    return (
        <View style={{
            flexDirection: "row",
            margin: 10,
            marginHorizontal: 30,
            justifyContent: "space-between"
         }}
        >
            <Icon icon="home" text="Home" />
            <Icon icon="shopping-bag" text="Panther Rewards" />
            <Icon icon="receipt" text="Orders" />
            <Icon icon="user" text="Student Account" />
        </View>
    );
}

const Icon = (props) => (
    <TouchableOpacity>
        <View>
            <FontAwesome5 
                name={props.icon}
                size={25} 
                style={{
                    marginBottom: 3, 
                    alignSelf: 'center',
                }}
            />
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
)