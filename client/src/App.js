import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./components/App.Navbar";
import ShoppingList from "./components/ShoppingList";
import ItemModel from "./components/itemModel";
import { Container } from 'reactstrap';

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
        <ItemModel />
        <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
