import React,{useContext} from 'react'
import './Footer.css';
import ThemeContext from "./Them";
function Footer() {
    const th = useContext(ThemeContext);
    return (
        
            <footer style={th}>
                <h1>Footer</h1>
            </footer>
        
    )
}

export default Footer
