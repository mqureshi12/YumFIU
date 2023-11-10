import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import { Divider } from "react-native-elements";
import RestaurantItems from "../components/home/RestaurantItems";
import { YELP_API_KEY} from '@env';
import BottomTabs from "../components/home/BottomTabs";

export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState("Miami");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => {
        const yelpRestaurants = json.businesses.filter((business) =>
          business.transactions.includes(activeTab.toLowerCase())
        );

      const localRestaurants = [
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

        // Concatenate localRestaurants with yelpRestaurants
        const combinedRestaurants = [...localRestaurants, ...yelpRestaurants];

        // Set the combined array as the new restaurantData
        setRestaurantData(combinedRestaurants);
      });
  }

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}