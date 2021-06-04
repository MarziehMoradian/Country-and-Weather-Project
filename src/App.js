import React,{useState,useEffect,useContext} from 'react';
import CountryList from './components/CountriesList';
import Search from './components/Search';
import CountryInfo from './components/Country';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Weather from './components/Weather';
import ThemeContext, { themes } from "./components/Them";
import './App.css';

function App() {
  const [users,setUsers]=useState([]);
  const [display,setDisplay]=useState(false);
  const [search, setSearch]=useState("");
  const [country,setCountry]=useState([]);
  const [displayCount,setDisplayCount]=useState(false)
  const [selected, setSelected] = useState("Iraq");
  const [weather, setWeather] = useState("");
  const [theme, setTheme] = useState(themes.dark);
  useEffect(() => {
    const getData = async () =>{
    const usersData = await fetchData()
    setUsers(usersData)
    }
    getData()
    }, [])
    const fetchData = async () =>{
    const res = await fetch('https://restcountries.eu/rest/v2/');
    const data = await res.json()
    return data;
    }
    const handleSearch=(search)=>{
      if(search!==""){
        
        setSearch(search);
        setDisplay(true);
      }else{
        setDisplayCount(false)
        setSearch(search);
        setDisplay(false)
      }
    }
    const handleView=(countryName)=>{
        let ff= users.filter(user=>user.name === countryName)
        setCountry([...ff])
        setDisplay(false)
        setDisplayCount(true)
    }
    // const handleView2=(e)=>{
    //   let cc=users.filter(user=>user.rigion===e);
    //     setCountry([...cc])
    //     setDisplay(false)
    //     setDisplayCount(true)
    // }
    const handleBack=()=>{
      setDisplayCount(false)
      setSearch("")
    }
    useEffect(() => {
      const fetchWeather = async () => {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${selected}&appid=d47f4877e32b09e186c757293d2e1b23`
        );
        const wData = await response.json();
        console.log(wData);
        const weatherFromServer = await wData;
        setWeather(weatherFromServer);
      };
      fetchWeather();
      console.log(weather);
    }, [selected]);
  
    const changeColor = () => {
      setTheme((theme) => {
        return theme === themes.light ? themes.dark : themes.light;
      });
    };
  
    return (
      <div >
         <ThemeContext.Provider value={theme}>
        <Header/>
        <Menu users={users} chengeTheme={changeColor} />
        {!displayCount &&<Search search={search} onSearch={handleSearch}/>}
       {display && <CountryList users={users} display={display} search={search} onClick={handleView}/>}
       {displayCount && <CountryInfo users={country} onClick={handleBack} />}
       {displayCount &&  <Weather
                country={country}
                selected={selected}
                weather={weather}
                />}
                {displayCount &&<button  className="btn_back" onClick={handleBack}>Back</button>}
        <Footer />
        </ThemeContext.Provider>
      </div>
    )
  }
  
 

export default App;
