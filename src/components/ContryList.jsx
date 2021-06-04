import React from 'react';
import Country from './Country';

const ContryList = ({users,userName}) => {
    return (
        <div>
            {users.filter(user=>(user.name === userName ?<Country key={user.callingCodes} users={user}/>:""))}
        </div>
    )
}
export default ContryList;