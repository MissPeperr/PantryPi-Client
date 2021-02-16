import React, { useEffect, useContext } from 'react'
import { List, Menu } from 'grommet'
import { More, Close, Checkmark } from 'grommet-icons';
import { FoodContext } from './FoodProvider'
import { Food } from "./Food"

export const FoodList = () => {
    const { foods, getFoods } = useContext(FoodContext)

    const theme = {
        global: {
            colors: {
                brand: '#228BE6',
            },
            hover: {
                background: {
                    color: "active",
                    opacity: "medium"
                }
            }
        }
    }

    useEffect(() => {
        getFoods()
    }, [])

    return (
        <>
            <h1>Food List</h1>
            <List
                primaryKey="name"
                secondaryKey="category_id"
                alignSelf="stretch"
                data={foods.sort()}
                action={(item, index) => (
                    item.on_grocery_list ? <Close color="red" /> : <Checkmark color="green" />
                )}
            />
        </>
    )
}