import { useState ,useEffect } from "react"
import React from 'react'
import axios from "axios"
export default function Meal({meal}) {
  const [imageUrl,setImageUrl] =useState("")

  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=bce2375c55014dc3b6a20b8b5c0f1632&includeNutrition=false`)
    .then(response => {
      
      setImageUrl(response.data.image)
    })
    
  })
  

  return (<article>
    <h1>{meal.title} </h1>
    <img src={imageUrl} alt="racipes" />
    <ul className="instructions">
      <li>Preparation time : {meal.readyInMinutes} minuts</li>
      <li>Number of servings: {meal.servings}</li>

      <a href={meal.sourceUrl}>Go to Recipe</a>
    </ul>
    </article>
  
   
  )
}

