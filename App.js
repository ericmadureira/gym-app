import React from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './Home';
import ProgramList from './ProgramList';

const AppNavigator = createStackNavigator(
	{
		Home: { screen: Home },
		ProgramList: { screen: ProgramList }
	},
	{ initialRouteName: "Home" }
);

export default createAppContainer(AppNavigator);