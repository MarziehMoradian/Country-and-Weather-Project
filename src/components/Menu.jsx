import React ,{useContext}from 'react';
import './Menu.css';
import Select from './Select';
import ThemeContext from "./Them";
function Menu({users,onClick,chengeTheme}) {
    const th = useContext(ThemeContext);
    return (
        
            <menu style={th}>
               <div className="selects">
                    <Select users={users} optionOne="Select" name="Asia" onClickk={onClick} />
                    {/* <Select users={users} optionOne="Africa" name="Africa" onClickk={onClick}/>
                    <Select users={users} optionOne="Americas" name="Americas" onClickk={onClick}/>
                    <Select users={users} optionOne="Australia" name="Oceania" onClickk={onClick}/>
                    <Select users={users} optionOne="Europe" name="Europe" onClickk={onClick}/> */}

                    <button className="them" onClick={chengeTheme}>ChengeTheme</button>
               </div>
            </menu>
       
    )
}

export default Menu
