import React from "react";
import Routes from "./src/routes";
import { StatusBar } from "react-native";

const App = () => {
  console.disableYellowBox = true;
  <StatusBar barStyle="light-content" />;
  return <Routes />;
};

export default App;
