import React, { useEffect, useState } from "react"

const url = "http://localhost:8088"

export const FoodContext = React.createContext()

export const FoodProvider = (props) => {
    const [foods, setFood] = useState([])
    const [singleFood, setSingleFood] = useState({})
    const [isDeleting, setDeleting] = useState(false)

    const getFoods = () => {
        return fetch(`${url}/food`)
        .then(res => res.json())
        .then(setFood)
    }

    const getFoodByBarcode = (barcode) => {
        return fetch(`${url}/food?barcode=${barcode}`)
        .then(res => res.json())
        .then(getFoods)
    }

    const deleteFoodByBarcode = (barcode) => {
        return fetch(`${url}/food?barcode=${barcode}`, {
            method: "DELETE"
        })
        .then(getFoods)
    }
    
    return (
        <FoodContext.Provider value={{
            foods, getFoods, getFoodByBarcode, singleFood, deleteFoodByBarcode, setDeleting, isDeleting
        }}>
            {props.children}
        </FoodContext.Provider>
    )
}