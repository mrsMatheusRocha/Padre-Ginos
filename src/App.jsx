import ReactDOM from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza
        name="Margherita"
        ingredients="Tomato Sauce, Mozzarella and Basil"
        image="/public/pizzas/classic_dlx.webp"
      />
      <Pizza
        name="Hawaiian"
        ingredients="Ham, Pineapple and Mozzarella"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="Creamcheese Chicken"
        ingredients="Chicken and Creamcheese"
        image={"/public/pizzas/cali_ckn.webp"}
      />
      <Pizza
        name="Pepperoni"
        ingredients="Pepperoni and Mozzarella"
        image={"/public/pizzas/pepperoni.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
