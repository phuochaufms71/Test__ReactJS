import { useGlobalContext } from "../context";

function Favorite() {
  const { favoriteFood, removeMealFromFavoriteFood, selectMeal } = useGlobalContext();
  return (
    <div className="favorite-food-container">
        <h2 style={{color: '#fff', marginBottom: '10px', fontSize: '2rem', textTransform: 'uppercase', textAlign: 'center', letterSpacing: '1.2px'}}>Favorite Food</h2> 
        <div className="favorite-food-list">
        {favoriteFood.map(food => {
            const { idMeal: id, strMealThumb: image, strMeal: name} = food;
            return (
              <div key={id} className="food-item">
                <img onClick={() => selectMeal(id)} src={image} alt="" className="food-item-thumbnail" />
                <p style={{color: '#fff', fontSize: '1.7rem'}}>{name}</p>
                <button style={{cursor: 'pointer', padding: 5, color: '#fff', position: 'absolute', top: '-20px', right: '-20px', fontSize: '2rem'}} onClick={() => removeMealFromFavoriteFood(id)}>X</button>
              </div>
            )
          })}
        </div>     
    </div>
  )
}

export default Favorite;
