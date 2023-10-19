import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const localRestaurants = [
  {
    name: "8th St Campus Kitchen",
    image_url:
      "https://housing.fiu.edu/_assets/images/8street-kitchen-1.jpg",
    categories: ["Deals", "Graham Center"],
    price: "$$",
    reviews: 1900,
    rating: 4.2,
  },
  {
    name: "Chick-fil-A",
    image_url:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,w_1600/crm/miamifl/Chick-FIl-A_63A3A4B1-5056-A36A-0BA237B4421EA12E-63a3a1da5056a36_63a3ac90-5056-a36a-0b0cf52c84741e67.jpg",
    categories: ["Fast Food", "PG5"],
    price: "$$",
    reviews: 1244,
    rating: 4.8,
  },
  {
    name: "Half Moon Empanadas",
    image_url:
      "https://www.halfmoonempanadas.com/uploads/b/468e11e0-f6e1-11eb-bbbf-b7f7a55ee3a1/Half%20Moon%20Empanadas%20Post_ODEzNj.png",
    categories: ["Soft Drinks", "PG6"],
    price: "$$",
    reviews: 700,
    rating: 3.5,
  },
];

export default function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
        >
          <View
            
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
