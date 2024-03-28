import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealIds((prevFavoriteMealIds) => [...prevFavoriteMealIds, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMealIds((prevFavoriteMealIds) =>
      prevFavoriteMealIds.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
