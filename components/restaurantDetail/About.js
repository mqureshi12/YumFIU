import React from "react";
import { View, Text, Image} from "react-native"

const image = 'https://housing.fiu.edu/_assets/images/50069871827_ca3ee7a1b0_c.jpg';

const title = '8th St Campus Kitchen';
const description = 'Buffet • Comfort Food • $$ • 🎫 • 4.2 ⭐️ (1900+)';

export default function About() {
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle title={title} />
            <RestaurantDescription description={description} />
        </View>
    );
}

const RestaurantImage = (props) => (
    <Image source={{uri: props.image}} style={{width: "100%", height: 180 }} />
)

const RestaurantTitle = (props) => (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.title}
    </Text>
  );

const RestaurantDescription = (props) => (<Text style={{
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: 400,
    fontSize: 15.5,
}}>{props.description}</Text>)