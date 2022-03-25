import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	ScrollView,
	Text,
	View,
	Button,
	Image,
} from "react-native";
import DefaultText from "../components/DefaultText";

import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
	const [screenTitle, setScreenTitle] = useState("Meal Details");
	const { mealId } = props.route.params;
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	const updatePage = (selectedMeal) => setScreenTitle(selectedMeal);

	useEffect(() => {
		updatePage(selectedMeal.title);
		props.navigation.setOptions({
			headerTitle: screenTitle,
		});
	}, [screenTitle, props.navigation]);

	return (
		<ScrollView>
			<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
			<View style={styles.details}>
				<DefaultText>{selectedMeal.duration} m</DefaultText>
				<DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
				<DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
			</View>
			<Text style={styles.title}>Ingredients</Text>
			{selectedMeal.ingredients.map((ingredient) => (
				<Text style={styles.listItem} key={ingredient}>
					{ingredient}
				</Text>
			))}
			<Text style={styles.title}>Steps</Text>
			{selectedMeal.steps.map((step) => (
				<Text style={styles.listItem} key={step}>
					{step}
				</Text>
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 200,
	},
	details: {
		flexDirection: "row",
		padding: 15,
		justifyContent: "space-around",
	},
	title: {
		fontFamily: "open-sans-bold",
		textAlign: "center",
		fontSize: 16,
	},
	listItem: {
		marginVertical: 10,
		marginHorizontal: 20,
		borderColor: "#ccc",
		borderWidth: 1,
		padding: 10,
	},
});

export default MealDetailScreen;
