import React from 'react'
import { useForm } from "react-hook-form"
import { mask } from "remask"

const handleChange = (props) => {
    const { setValue } = useForm()
    function handleChange(event) {

        const name = event.target.name
        const value = event.target.value
        const Mascara = event.target.getAttribute('mask')

        setValue(name, mask(value, Mascara))
    }

    return (
        <>
            {props.children}
        </>
    )
}

export default handleChange