import React,{useContext} from 'react';
import './CountriesList.css';
import ThemeContext from "./Them";
function Country({users,onClick}) {
    const them = useContext(ThemeContext);
    return (
        <div>
            
            {/* <table className="table" >
                <thead>
                    <th>Name</th>
                    <th>Capital</th>
                    <th>Region</th>
                    <th>Subregion</th>
                    <th className="callCodeTh">Callingcodes</th>
                    <th className="callCodeTh">Flag</th>
                </thead> */}
                {users.map(user =><div className="cardInfo">
                        <span className="imgTd"><img src={user.flag} className="img" /></span>
                        <span className="info" style={them}>
                           <h4>{user.name}</h4><br/>
                       {"NativeName"+" : "+user.nativeName}<br/>
                        {"Capital"+" :  "+user.capital}<br/>
                        {"Region"+" :  "+user.region}<br/>
                        {"Subregion"+" :  "+user.subregion}<br/>
                        
                        </span>
                        <span className="callCode"><h4>Callingcodes</h4> {user.callingCodes}</span>
                    </div>
                    )}
                     
                    

                {/* </table>  */}
            
        </div>
    )
}

export default Country
