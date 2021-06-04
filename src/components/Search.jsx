import React from 'react';
import './Search.css';
function Search({search,onSearch}) {

    return (
        <div className="menu">
            <input type="text" 
            value={search}
            placeholder="Search ..."  
            className="search"
            onChange={(e)=>onSearch(e.target.value)}/>
        </div>
    )
}

export default Search
