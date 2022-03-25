import { Platform, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeals from "../screens/CategoryMealsScreen";
import MealDetails from "../screens/MealDetailScreen";
import FiltersScreen from "../screens/FiltersScreen";
import Colors from "../constants/Colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "../screens/FavoritesScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MainNavigator = createDrawerNavigator();
const MealsStack = createStackNavigator();
const FavoritesStack = createStackNavigator();

const MealsStackScreen = () => {
	return (
		<MealsStack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor:
						Platform.OS === "android" ? Colors.primaryColor : "none",
				},
				headerTintColor:
					Platform.OS === "android" ? "#fff" : Colors.primaryColor,
				headerTitleStyle: {
					fontWeight: "bold",
				},
			}}
		>
			<MealsStack.Screen
				name="Home Screen"
				options={{
					title: "Meal Categories",
				}}
				component={CategoriesScreen}
			/>
			<Stack.Screen name="Category Meals" component={CategoryMeals} />
			<Stack.Screen
				name="Meal Details"
				component={MealDetails}
				options={{
					headerRight: () => (
						<TouchableOpacity
							style={styles.icon}
							onPress={() => console.log("favorited")}
						>
							<Ionicons
								name={"star-outline"}
								size={20}
								color={Platform.OS === "ios" ? Colors.primaryColor : "#fff"}
							/>
						</TouchableOpacity>
					),
				}}
			/>
		</MealsStack.Navigator>
	);
};
const FavoritesStackScreen = () => {
	return (
		<FavoritesStack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor:
						Platform.OS === "android" ? Colors.primaryColor : "none",
				},
				headerTintColor:
					Platform.OS === "android" ? "#fff" : Colors.primaryColor,
				headerTitleStyle: {
					fontWeight: "bold",
				},
			}}
		>
			<FavoritesStack.Screen
				name="Favorites Screen"
				component={FavoritesScreen}
			/>
			<FavoritesStack.Screen name="Meal Details" component={MealDetails} />
		</FavoritesStack.Navigator>
	);
};

const TabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color }) => {
					let iconName;

					if (route.name === "Meals") {
						iconName = focused ? "ios-restaurant" : "ios-restaurant-outline";
					} else if (route.name === "Favorites") {
						iconName = focused ? "star" : "star-outline";
					}
					return <Ionicons name={iconName} size={25} color={color} />;
				},
				tabBarActiveTintColor:
					Platform.OS === "ios" ? Colors.secondaryColor : "#fff",
				tabBarInactiveTintColor: Platform.OS === "android" ? "#aaa" : "grey",
				tabBarStyle: {
					backgroundColor:
						Platform.OS === "android" ? Colors.secondaryColor : "#fff",
				},

				headerTintColor: Colors.secondaryColor,
				headerTitleStyle: {
					fontWeight: "bold",
					fontSize: 22,
				},
			})}
		>
			<Tab.Screen name="Meals" component={MealsStackScreen} />
			<Tab.Screen name="Favorites" component={FavoritesStackScreen} />
		</Tab.Navigator>
	);
};

const MealsNavigator = () => {
	return (
		<NavigationContainer>
			<MainNavigator.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerStyle: {
						backgroundColor:
							Platform.OS === "android" ? Colors.primaryColor : "none",
					},
					headerTintColor:
						Platform.OS === "android" ? "#fff" : Colors.primaryColor,
					headerTitleStyle: {
						fontWeight: "bold",
					},
				}}
			>
				<MainNavigator.Screen name="Home" component={TabNavigator} />
				<MainNavigator.Screen
					name="Filters"
					component={FiltersScreen}
					options={{
						headerRight: () => (
							<TouchableOpacity
								style={styles.icon}
								onPress={() => navigation.push("save", { save: saveFilters })}
							>
								<Ionicons
									name={"ios-save"}
									size={20}
									color={Platform.OS === "ios" ? Colors.primaryColor : "#fff"}
								/>
							</TouchableOpacity>
						),
					}}
				/>
			</MainNavigator.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	icon: {
		marginRight: 10,
		alignItems: "center",
	},
});

export default MealsNavigator;
