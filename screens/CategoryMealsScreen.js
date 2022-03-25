import React, { useState, useEffect } from "react";

import MealList from "../components/MealList";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
	const [categoryHeader, setCategoryHeader] = useState("Selected Category");
	const { categoryID } = props.route.params;

	const displayedMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(categoryID) >= 0
	);

	const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryID);
	const updatePage = (chosenCategory) => setCategoryHeader(chosenCategory);

	useEffect(() => {
		updatePage(selectedCategory);
		props.navigation.setOptions({ headerTitle: categoryHeader });
	}, [props.navigation, categoryHeader]);

	props.navigation.setOptions({ headerTitle: selectedCategory.title });

	return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealsScreen;
