import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import List from "./pages/List";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            title: "Editar",
            headerTintColor: "#ddd",
            headerStyle: { backgroundColor: "#5d14a3" },
          }}
          name="List"
          component={List}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
