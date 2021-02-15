import React, { useEffect, useContext } from 'react'
import { FoodContext } from './FoodProvider'
import { Food } from "./Food"

export const FoodList = () => {
    const { foods, getFoods } = useContext(FoodContext)

    useEffect(() => {
        getFoods()
    }, [])

    return (
        <>
            <h1>Food List</h1>
            <div className="food__list">
                {
                    foods.map(singleFood => (
                        <Food key={singleFood.id} foodObj={singleFood}/>
                    ))
                }
            </div>
        </>
    )
}