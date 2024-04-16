import React, { useContext, useEffect, useState } from "react";
import { ALL_MEALS_URL } from "../constants";
import { fakeStore } from "../api";

const AppContext = React.createContext();

//get data from store to components
export const useGlobalContext = () => {
    return useContext(AppContext);
}

function AppProvider({ children }) {
    const [meals, setMeals] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedMeal, setSelectedMeal] = useState({})

    const selectMeal = (id) => {
        // console.log({id});
        const meal = meals.find(meal => meal.idMeal === id)
        // console.log({meal})
        setSelectedMeal(meal);
        setShowModal(true)
    }

    const [favoriteFood, setFavoriteFood] = useState([]);
    // console.log('favoriteFood', favoriteFood)
    const addMealToFavoriteFood = (id) => {
        // console.log({id})
        const meal = meals.find(meal => meal.idMeal === id);
        // console.log({meal})
        const alreadyFavorite = favoriteFood.find(meal => meal.idMeal === id)
        if (alreadyFavorite) return 
        const updateFavoriteFood = [...favoriteFood, meal]
        setFavoriteFood(updateFavoriteFood)
    }

    const removeMealFromFavoriteFood = (id) => {
        const updateFavoriteFood = favoriteFood.filter(food => food.idMeal !== id);
        setFavoriteFood(updateFavoriteFood);
    }

    const [mealSearch, setMealSearch] = useState('');
    // console.log("mealSearch", mealSearch)

    const fetchMeals = async(url) => {
        setIsLoading(true)
        try {
            const response = await fakeStore().get(url)
            // console.log("response", response);
            if (response.data.meals) {
                setMeals(response.data.meals);
            } else {
                setMeals([])
            }
        } catch (err) {
            console.log('Error', err);
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchMeals(ALL_MEALS_URL)
    }, [])

    useEffect(() => {
        if (mealSearch) {
            fetchMeals(`${ALL_MEALS_URL}${mealSearch}`)
        }
    }, [mealSearch])
    return (
      <AppContext.Provider value={{isLoading, meals, selectMeal, selectedMeal, showModal, setShowModal, addMealToFavoriteFood, removeMealFromFavoriteFood, favoriteFood, setMealSearch, fetchMeals}}>
        { children }
      </AppContext.Provider>
    )
  }
  
  export default AppProvider;
