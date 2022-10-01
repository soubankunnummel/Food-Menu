
import { useState } from 'react';
import axios from 'axios';
import MealList from './MealList'
import './App.css';


function App() {
  const [mealData,setMealData] = useState(null);
  const [calories,setCalories] = useState(2000);
  function handleChange(e) {
    setCalories(e.target.value)
  }
  function getMealData() {
    axios.get( `https://api.spoonacular.com/mealplanner/generate?apiKey=bce2375c55014dc3b6a20b8b5c0f1632&timeFrame=day&target&Calories=${calories}true`)
    .then(response => {
      console.log(response.data);
      
     setMealData(response.data)

      ;
    });
    
  }

  return (
    <div className='App'>
      <section className="controls">
        <input type="number"
        placeholder="Calories (e.g. 2000)" 
        onChange={handleChange}/>
      </section>
      <button onClick={getMealData}>Get Daily Meal Plan</button>
     {mealData && <MealList mealData={mealData} />}
    </div>
    
  );
}

export default App;
