import ReactDOM from "react-dom/client";
import Order from "./Order";
import { StrictMode, useState } from "react";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Header from "./Header";
import { CartContext } from "./contexts/CartContext";

const App = () => {
  const cartHook = useState([]);
  return (
    <CartContext.Provider value={cartHook}>
      <div>
        <Header />
        <Order />
        <PizzaOfTheDay />
      </div>
    </CartContext.Provider>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root
  .render(
    <StrictMode>
      <App />
    </StrictMode>
  );
