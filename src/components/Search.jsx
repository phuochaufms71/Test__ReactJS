import { useState } from "react"
import { useGlobalContext } from "../context";
import { ALL_MEALS_URL, RANDOM_MEAL_URL } from "../constants";

function Search() {
  const [text, setText] = useState('');
  const { setMealSearch, fetchMeals} = useGlobalContext();
  const handleInputChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setMealSearch(text)
      setText('')
    }
  }
  const handleRandomMeal = () => {
    fetchMeals(RANDOM_MEAL_URL);
  }
  const handleShowAllMeals = () => {
    fetchMeals(ALL_MEALS_URL);
  }

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input style={{outline: 'none', color: '#fff', fontSize: '1.6rem', borderRadius: 8, backgroundColor: '#000', border: 'none', padding: 12, minWidth: 500}} onChange={handleInputChange} type="text" placeholder="Search your food..." value={text} />
        <button className="btn btn-search" type="submit" >Search</button>
        <button onClick={handleRandomMeal} type="button" className="btn btn-random">Random Meal</button>
        <button onClick={handleShowAllMeals} type="button" className="btn">Show All Meal</button>
      </form>
    </div>
  )
}

export default Search;
