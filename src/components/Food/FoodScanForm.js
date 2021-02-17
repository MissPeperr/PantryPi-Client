import React, { useEffect, useContext, useState } from 'react'
import { Button } from 'grommet'
import { Trash, Add } from 'grommet-icons'
import { FoodContext } from './FoodProvider'

export const FoodScanForm = () => {
    const { getFoodByBarcode, deleteFoodByBarcode } = useContext(FoodContext)

    const [isDeleting, setDeleting] = useState(false)

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
                label={isDeleting ? "Add food by Scanning" : "Remove Food by Scanning"}
                icon={isDeleting ? <Add /> : <Trash />}
                onClick={(e) => {
                    e.preventDefault()
                    setDeleting(!isDeleting)
                }}
            />
            <form onSubmit={(e) => {
                e.preventDefault()
                wholeBarcode = ""
            }}>
                <input hidden id="barcode" name="barcode" type="text" />
            </form>
        </>
    )
}