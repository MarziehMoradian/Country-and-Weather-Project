import React,{useContext} from 'react';
import './Header.css';
import ThemeContext from "./Them";

function Header() {
    const th = useContext(ThemeContext);
    return (
        <header style={th}>
            <h1>About Countries</h1>
        </header>
    )
}

export default Header
