import React, { useEffect } from 'react'

export const Food = ({foodObj}) => (
    <>
        <h3>{foodObj.name}</h3>
        <p>{foodObj.category_id}</p>
        <p>There {foodObj.quantity > 1 ? "are" : "is"} {foodObj.quantity} left</p>
        <p>On grocery list? {foodObj.on_grocery_list ? "YES" : "NO"}</p>
    </>
)