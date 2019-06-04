import React from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from './Home';
import ProgramList from './ProgramList';
import About from './About';

const AppNavigator = createStackNavigator(
	{
		Home: { screen: Home },
		ProgramList: { screen: ProgramList },
		About: { screen: About }
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