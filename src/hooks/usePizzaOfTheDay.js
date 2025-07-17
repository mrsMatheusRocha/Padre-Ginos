import { useEffect, useState } from "react";

export default function usePizzaOfTheDay() {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await fetch(`${apiUrl}/api/pizza-of-the-day`);
      const data = await res.json();
      setPizzaOfTheDay(data);
    }
    fetchPizzaOfTheDay();
  }, [])

  return pizzaOfTheDay;
}