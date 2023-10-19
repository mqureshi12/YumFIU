import React from "react";
import { View, Text, Image } from "react-native";

const yelpRestaurantInfo = {
  name: "Kitchen Thai Cuisine",
  image:
    "https://hips.hearstapps.com/hmg-prod/images/pad-thai-index-6477629462a38.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*",
  price: "$$",
  reviews: "1500",
  rating: 4.5,
  categories: [{ title: "Thai" }, { title: "Comfort Food" }],
};

// const image =
//   "https://housing.fiu.edu/_assets/images/50069871827_ca3ee7a1b0_c.jpg";

// const title = "8th St Campus Kitchen";
// const description = "Buffet • Comfort Food • $$ • 🎫 • 4.2 ⭐️ (1900+)";

export default function About(props) {
  const { name, image, price, reviews, rating, categories } = props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");
  
  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;


  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = (props) => (
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

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: 400,
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
