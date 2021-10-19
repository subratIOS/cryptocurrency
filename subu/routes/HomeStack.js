
import React from 'react'
import Home from '../screens/Home';
import Details from '../screens/Details';
import MoreDetails from '../screens/MoreDetails';
import HocToBeUsed from '../screens/withHOC';
import LifeCycleClass from '../screens/LifeCycleClass';
import LifeCycleFunctionalComp from '../screens/LifeCycleFunctionalComp';
import {createStackNavigator} from '@react-navigation/stack';



const Stack = createStackNavigator();

function HomeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen name='Details' component={Details}></Stack.Screen>
            <Stack.Screen name="MoreDetails" component={MoreDetails}></Stack.Screen>
            <Stack.Screen name="HocToBeUsed" component={HocToBeUsed}></Stack.Screen>
            <Stack.Screen name="LifeCycleClass" component={LifeCycleClass}></Stack.Screen>
            <Stack.Screen name="LifeCycleFunctionalComp" component={LifeCycleFunctionalComp}></Stack.Screen>
        </Stack.Navigator>
       
    );
}

export default HomeStack;

