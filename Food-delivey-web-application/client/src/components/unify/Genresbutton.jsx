import React from "react";

function GenresButton() {
  const restaurants = [
    "Italian",
    "Mexican",
    "Chinese",
    "Japanese",
    "Indian",
    "Thai",
    "Mediterranean",
    "French",
    "Greek",
    "Vietnamese",
    "Korean",
    "American",
    "Middle Eastern",
    "Spanish",
    "Peruvian",
    "Brazilian",
    "Turkish",
    "Moroccan",
    "Ethiopian",
    "Russian",
    "German",
    "Swedish",
    "British",
    "Irish",
    "Scottish",
    "Australian",
    "Canadian",
    "South African",
    "Argentinian",
    "Chilean",
    "Colombian",
    "Venezuelan",
    "Cuban",
    "Puerto Rican",
    "Dominican",
    "Jamaican",
    "Trinidadian",
    "Haitian",
    "American BBQ",
    "Steakhouse",
    "Seafood",
    "Vegetarian",
    "Vegan",
    "Gluten-free",
    "Farm-to-table",
    "Food trucks",
    "Café",
    "Bakery",
    "Dessert",
    "Ice cream",
    "Juice bar",
    "Wine bar",
    "Brewery",
    "Pub",
    "Sports bar",
    "Nightclub",
  ];
  const randomRestaurants = [];

  while (randomRestaurants.length < 3) {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const randomRestaurant = restaurants[randomIndex];

    if (!randomRestaurants.includes(randomRestaurant)) {
      randomRestaurants.push(randomRestaurant);
    }
  }
  return (
    <div>
      {randomRestaurants.map((item, index) => (
        <p
          key={index}
          className="border border-amber-500 inline-block px-2 py-1 mr-2 rounded-lg text-amber-500 hover:bg-amber-500 hover:text-white cursor-pointer font-thin mt-1"
        >
          {item}
        </p>
      ))}
    </div>
  );
}

export default GenresButton;
