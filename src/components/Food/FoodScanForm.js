import React, { useEffect, useContext, useState, useRef } from 'react'
import { FoodContext } from './FoodProvider'
import { Food } from "./Food"

export const FoodScanForm = () => {
    const { getFoodByBarcode } = useContext(FoodContext)

    const [barcode, setBarcode] = useState("")

    // const barcode = useRef(null)

    useEffect(() => {
        // gotta debounce
        let wholeBarcode = ""
        window.addEventListener("keypress", (e) => {
            if (e.charCode === 13){
                getFoodByBarcode(wholeBarcode)
            } else {
                wholeBarcode += e.key
                console.log(wholeBarcode)
            }
        })
    }, [])

    useEffect(() => {
        console.log(barcode)
    }, [barcode])

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