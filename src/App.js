import {React, ReactDOM} from "react";


const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.ingredients)
  ])
}

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Margherita",
      ingredients: "Tomato Sauce, Mozzarella and Basil"
    }),
    React.createElement(Pizza, {
      name: "Hawaiian",
      ingredients: "Ham, Pineapple and Mozzarella"
    }),
    React.createElement(Pizza, {
      name: "Creamcheese Chicken",
      ingredients: "Chicken and Creamchesse"
    }),
    React.createElement(Pizza, {
      name: "Pepperoni",
      ingredients: "Pepperoni and Mozzarella"
    }),
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));