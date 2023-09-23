import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";

const YELP_API_KEY = process.env.YELP_API_KEY;

export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);

  const getRestaurantsFromYelp = () => {
    // this is default Miami until we fix it for FIU restaurants
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=Miami`;

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
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
