import React from 'react'
import {useAlertToggle} from './Alert/AlertContext'

export default function Main( {toggle} ) {
    const toggle = useAlertToggle()
    return (
        <>
        <h1>hello context</h1>
        <button onClick={toggle} className="btn btn-success">Show Alert</button>
        </>
    )
}