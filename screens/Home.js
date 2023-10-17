import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import { Divider } from "react-native-elements";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import { YELP_API_KEY} from '@env';
import BottomTabs from "../components/home/BottomTabs";

export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
  const [city, setCity] = useState("Miami");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    // This is default Miami until we update it for FIU restaurants
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

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