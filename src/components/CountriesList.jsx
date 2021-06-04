import React,{useState,useEffect} from 'react';
import './CountriesList.css';
// import Country from './components/Country';

function CountriesList({users,search,onClick}) {
    
      let filterCountry=users.filter(user=>user.name.toLocaleLowerCase().startsWith(search));
     
      return (
        <div className="main">
          <ul className="list">
            {filterCountry.map(user=>
            <li key={user.name} onClick={(e)=>onClick(e.target.innerText)}>{user.name}</li>)}
          </ul>
        
        {/* <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>nativeName</th>
              <th>region</th>
            </tr>
          </thead>
          <tbody >
              { user.map(users => <tr>
                <td onClick={(e)=>onClick(e.target.innerText)}>{users.name}</td>
                <td>{users.nativeName}</td>
                <td>{users.region}</td>
            </tr>)}
          </tbody>
        </table> */}
      </div>
    )
}

export default CountriesList
