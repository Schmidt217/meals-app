import React, { useState, useEffect } from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props) => {
	const [screenHeader, setScreenHeader] = useState("Your Favorites");

	const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");

	useEffect(() => {
		props.navigation.setOptions({
			headerTitle: screenHeader,
		});
	}, [props.navigation, screenHeader]);

	return <MealList listData={favMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;
