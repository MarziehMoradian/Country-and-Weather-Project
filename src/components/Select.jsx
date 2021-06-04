import React,{useState} from 'react';
import './Menu.css';
import Country from './Country';
function Select({name,optionOne,users,onClickk}){
    // const onClick=(userName)=>{
    //     users.filter(user=>(user.name === userName ?<Country key={user.callingCodes} users={users}/>:""))}

    // }
    return (
        <div>
            <select name={name} key={users.name}>
                <option value="">{optionOne}</option>
                {users.map(user=><option onClick={(e)=>onClickk(e.target.innerText)}>{user.name}</option>)}
            </select>
        </div>
    )
}

export default Select
