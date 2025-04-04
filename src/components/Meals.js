import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch("http://localhost:3001/meals");
        if (!response.ok) {
          throw new Error("Failed to fetch meals");
        }
        const data = await response.json();
        setMeals(data);
      } catch (err) {
        console.error("Error fetching meals:", err);
      }
    };

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id || meal.name} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
