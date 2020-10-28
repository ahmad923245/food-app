import React from "react";

import {
  createStackNavigator,

} from "@react-navigation/stack";
import AdminHome from './srceens/Admin/AdminHome'
import AddFood from './srceens/Admin/AddFood'



const { Navigator, Screen } = createStackNavigator();

const AdminStack = () => (
  <Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Screen name="AdminHome" component={AdminHome} />
    <Screen name="AddFood" component={AddFood} />
   
  </Navigator>
);

export default AdminStack;
