import { useGlobalContext } from "../context";
import { FaRegThumbsUp } from "react-icons/fa";

function Meals() {
    const {isLoading, meals, selectMeal, addMealToFavoriteFood} = useGlobalContext()
    // console.log("isLoading", isLoading)
    // console.log("meals", meals)

    if (isLoading) {
      return <div>Loading...</div>
    }

    if(meals?.length < 1) {
      return <div>No meals</div>
    }
  return (
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '20px'}}>
      {meals.map(meal => {
        const { idMeal: id, strMeal: name, strMealThumb: image } = meal;
        return (
          <div key={id} style={{cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '10px', border: '1px solid gray' , borderRadius: 10}}>
            <img onClick={() => selectMeal(id)} src={image} alt="" style={{width: '100%', height: '300px', borderRadius: '10px 10px 0 0'}} />
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
              <p style={{fontSize: '1.8rem', fontWeight: '500', color: 'green', textTransform: 'uppercase'}}>{name}</p>
              <button style={{cursor: 'pointer', paddingTop: '10px', fontSize: '1.8rem'}} onClick={() => addMealToFavoriteFood(id)}><FaRegThumbsUp /></button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Meals;
