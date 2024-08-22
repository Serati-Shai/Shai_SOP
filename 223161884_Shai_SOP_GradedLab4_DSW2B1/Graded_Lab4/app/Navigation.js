import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Menu from './Menu';
import Cart from './Cart';
import Profile from './Profile';
import { CartProvider } from './CartContext';


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Menu" component={Menu} />
    <Tab.Screen name="Cart" component={Cart} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <CartProvider>
    <NavigationContainer style={{flex:1}}>
      <Stack.Navigator
        initialRouteName="Form1"
        screenOptions={{ headerShown: false }}
        
      >
        <Stack.Screen name="Form1" component={Form1} />
        <Stack.Screen name="Form2" component={Form2} />
        <Stack.Screen name="Form3" component={Form3} />
        <Stack.Screen name="Tabs" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  </CartProvider>
);

export default AppNavigator;
