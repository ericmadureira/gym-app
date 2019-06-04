import React from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './Home';
import ProgramList from './ProgramList';

const AppNavigator = createStackNavigator(
	{
		Home: { screen: Home },
		ProgramList: { screen: ProgramList }
	},
	{
		initialRouteName: "Home",	
		defaultNavigationOptions: {
    	headerStyle: { backgroundColor: '#2274f7' },
    	headerTintColor: '#fff',
    	headerTitleStyle: { fontWeight: 'bold' }
    }
  }
);

export default createAppContainer(AppNavigator);