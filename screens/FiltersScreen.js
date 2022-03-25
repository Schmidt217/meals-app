import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Switch, Platform } from "react-native";
import Colors from "../constants/Colors";

const FilterSwitch = (props) => {
	return (
		<View style={styles.filterContainer}>
			<Text>{props.label}</Text>
			<Switch
				trackColor={{ true: Colors.primaryColor, false: "default" }}
				thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
				value={props.state}
				onValueChange={props.onChange}
			/>
		</View>
	);
};

const FiltersScreen = (props) => {
	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);
	const [isVegan, setIsVegan] = useState(false);
	const [isVegitarian, setIsVegitarian] = useState(false);

	const { save } = props.route.params;

	const saveFilters = () => {
		const appliedFilters = {
			glutenFree: isGlutenFree,
			lactoseFree: isLactoseFree,
			vegan: isVegan,
			vegitarian: isVegitarian,
		};
		console.log(appliedFilters);
	};

	useEffect(() => {
		props.navigation.push("filters", { save: saveFilters });
	}, []);

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Available Filters</Text>
			<Text>{save}</Text>
			<FilterSwitch
				label="Gluten Free"
				state={isGlutenFree}
				onChange={(newValue) => setIsGlutenFree(newValue)}
			/>
			<FilterSwitch
				label="Lactose Free"
				state={isLactoseFree}
				onChange={(newValue) => setIsLactoseFree(newValue)}
			/>
			<FilterSwitch
				label="Vegan"
				state={isVegan}
				onChange={(newValue) => setIsVegan(newValue)}
			/>
			<FilterSwitch
				label="Vegitarian"
				state={isVegitarian}
				onChange={(newValue) => setIsVegitarian(newValue)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 22,
		margin: 20,
		textAlign: "center",
	},
	filterContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "80%",
		marginVertical: 10,
	},
});

export default FiltersScreen;
