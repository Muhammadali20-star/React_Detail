import React from 'react'
import { useNavigate } from 'react-router-dom'

const Recipes = ({data}) => {
    const navigate = useNavigate()
  return (
    <div>
      <h2 className='text-center text-4xl mb-8'>Recipe</h2>
        <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-2  gap-4 mb-15'>
        {
            data?.map((recipe)=> (
                <div key={recipe.id} className='bg-gray-100 flex flex-col gap-1 px-2 rounded-[10px]'>
                   <img loading='lazy' onClick={()=> navigate(`/recipe/${recipe.id}`)} className='bg-gray-200' src={recipe.image} alt={recipe.name} />
                   <h3><span className='font-bold'>name:</span> {recipe.name}</h3>
                   <h3><span className='font-bold'>prepTimeMinutes:</span> {recipe.prepTimeMinutes}</h3>
                   <h3><span className='font-bold'>cookTimeMinutes:</span> {recipe.cookTimeMinutes}</h3>
                   <h3><span className='font-bold'>servings:</span> {recipe.servings}</h3>
                   <h3><span className='font-bold'>difficulty:</span> {recipe.difficulty}</h3>
                   <h3><span className='font-bold'>caloriesPerServing:</span> {recipe.caloriesPerServing}</h3>
                   {recipe?.tags?.map((index, id)=>(
                    <h3 key={id}><span className='font-bold'>tags:</span> {index}</h3>
                   ))}
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default React.memo(Recipes)