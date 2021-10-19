
import React from 'react'
import Home from '../screens/Home';
import Details from '../screens/Details';
import MoreDetails from '../screens/MoreDetails';
import HocToBeUsed from '../screens/withHOC';
import LifeCycleClass from '../screens/LifeCycleClass';
import LifeCycleFunctionalComp from '../screens/LifeCycleFunctionalComp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




const Tab = createBottomTabNavigator();

function BottomTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Dashboard" component={Home}></Tab.Screen>
            <Tab.Screen name='Merchants' component={Details}></Tab.Screen>
            <Tab.Screen name="Portfolio" component={MoreDetails}></Tab.Screen>
        </Tab.Navigator>
       
    );
}

export default BottomTab;