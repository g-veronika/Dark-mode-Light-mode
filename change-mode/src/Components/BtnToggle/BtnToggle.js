import React, {useContext} from 'react'
import './BtnToggle.css'
import { ThemeContext } from '../../Context/ThemeContext'

export default function BtnToggle() {


    const {toggleTheme, theme} = useContext(ThemeContext) 

    return (
        <button
        onClick={toggleTheme}
        className="btn-toggle">
            {theme ? "LIGHT" : "DARK"}    
        </button>
    )
}
