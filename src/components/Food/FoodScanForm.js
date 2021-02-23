import React, { useEffect, useContext, useState, useRef, useDebugValue } from 'react'
import { Button } from 'grommet'
import { Trash, Add } from 'grommet-icons'
import { FoodContext } from './FoodProvider'
import "./form.css"

export const FoodScanForm = () => {

    const { getFoodByBarcode, deleteFoodByBarcode, isDeleting, setDeleting } = useContext(FoodContext)
    const barcode = useRef(null)
    let wholeBarcode = ""

    useEffect(() => {
        const handleScan = (e) => {
            if (e.charCode === 13) {
                if (!isDeleting) {
                    getFoodByBarcode(wholeBarcode)
                        .then(() => {
                            wholeBarcode = ""
                        })
                } else {
                    deleteFoodByBarcode(wholeBarcode)
                }
            } else {
                wholeBarcode += e.key
            }
        }

        if (isDeleting) {
            window.removeEventListener('keypress', handleScan)
            window.addEventListener('keypress', handleScan);
        } else {
            window.addEventListener('keypress', handleScan);
        }
        return () => window.removeEventListener('keypress', handleScan);
    }, [isDeleting, setDeleting]);


    return (
        <>
            <Button
                reverse
                primary
                label={isDeleting ? "Click here to Add Food" : "Click here to Remove Food"}
                icon={isDeleting ? <Add /> : <Trash />}
                onClick={(e) => {
                    barcode.current.focus()
                    e.preventDefault()
                    setDeleting(!isDeleting)
                }}
            />
            <form onSubmit={(e) => {
                e.preventDefault()
                wholeBarcode = ""
            }}>
                {/* using new-password so autofill doesn't show up on 0px input */}
                <input id="barcode" autocomplete="new-password" ref={barcode} name="barcode" type="password" className="nopx" />
            </form>
        </>
    )
}