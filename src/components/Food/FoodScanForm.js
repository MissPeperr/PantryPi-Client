import React, { useEffect, useContext, useState, useRef } from 'react'
import { FoodContext } from './FoodProvider'
import { Food } from "./Food"

export const FoodScanForm = (props) => {
    const { getFoodByBarcode } = useContext(FoodContext)

    const [barcode, setBarcode] = useState("")

    useEffect(() => {
        let wholeBarcode = ""
        window.addEventListener("keypress", (e) => {
            if (e.charCode === 13){
                getFoodByBarcode(wholeBarcode)
            } else {
                wholeBarcode += e.key
            }
        })
    }, [])

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                }}>
                <input hidden id="barcode" name="barcode" type="text"/>
            </form>
        </>
    )
}