import React, { useEffect, useContext, useState } from 'react'
import { List } from 'grommet'
import { Close, Checkmark } from 'grommet-icons';
import { FoodContext } from './FoodProvider'

export const FoodList = (props) => {
    const { foods, getFoods } = useContext(FoodContext)

    useEffect(() => {
        getFoods()
    }, [])

    return (
        <>
            <h1>Food List</h1>
            <List
                primaryKey="name"
                secondaryKey="quantity"
                alignSelf="stretch"
                data={foods}
                action={(item, index) => (
                    item.on_grocery_list ? <Close color="red" /> : <Checkmark color="green" />
                )}
            />
        </>
    )
}