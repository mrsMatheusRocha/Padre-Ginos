import { useEffect, useState } from "react";

export default function usePizzaOfTheDay() {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const res = await fetch("/api/pizza-of-the-day");
      const data = await res.json();
      setPizzaOfTheDay(data);
    }
    fetchPizzaOfTheDay();
  }, [])

  return pizzaOfTheDay;
}