import React from "react";
import { StyleSheet, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
	const renderGridItem = (itemData) => {
		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onSelect={() => {
					props.navigation.navigate("Category Meals", {
						categoryID: itemData.item.id,
					});
				}}
			/>
		);
	};

	return (
		<FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default CategoriesScreen;
