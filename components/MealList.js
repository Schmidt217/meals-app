import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import MealItem from "./MealItem";

const MealList = (props) => {
	const renderMealItem = (itemData) => {
		return (
			<MealItem
				title={itemData.item.title}
				image={itemData.item.imageUrl}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				onSelectMeal={() => {
					props.navigation.navigate("Meal Details", {
						mealId: itemData.item.id,
					});
				}}
			/>
		);
	};

	return (
		<View style={styles.screen}>
			<FlatList
				data={props.listData}
				renderItem={renderMealItem}
				style={{ width: "100%" }}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		margin: 20,
	},
});

export default MealList;
