import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MenuOptions from '../components/screens/appScreens/MenuOption';
import Profile from '../components/screens/appScreens/Profile';
import FAQ from '../components/screens/appScreens/FAQ';
import Blogs from '../components/screens/appScreens/Blogs';

const Stack = createStackNavigator();

const MenuNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="MenuOptions"
        component={MenuOptions}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen name="FAQ" component={FAQ} options={{headerShown: false}} />
      <Stack.Screen
        name="Blogs"
        component={Blogs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MenuNavigator;
