import React from 'react'
import { useEffect, useState } from 'react';
import { Mainpage } from '../service/weathesevice'
import Layout from '../shared/Layout';

function Weather() {
    const [weathers,setWeathers] = useState([])
    const [city, setCity] = useState([])
    
    
      useEffect(() => {
          const fetchData = async () => {
            try {
             const response = await Mainpage();
             console.log(response);
    
            setCity(response.city)

    
             setWeathers(response.list);
           
            } catch (error) {
                console.log(error);
              }
            }
        
        fetchData()
        
    },[])
    
    console.log(weathers)
    console.log(city)
    
    const fiveDayForcast = weathers.map((forcast,index) => {
      console.log('fiveDayForcast',forcast)
    
       if (forcast.dt_txt === "2022-09-09 00:00:00" ||forcast.dt_txt === "2022-09-10 00:00:00" ||forcast.dt_txt === "2022-09-11 00:00:00" ||forcast.dt_txt === "2022-09-12 00:00:00" ||forcast.dt_txt === "2022-09-13 00:00:00"){
      
      
      return(
        <li key={index} >
          <h3>{forcast.dt_txt}</h3>
          <p>{forcast.main.temp}°F</p>
          <p>{forcast.weather[0].main}</p>
        </li>
      )
      }
    
    
    })
    
    
    
      return (
       <Layout>
         
       <h1>{city.name}</h1>
    
        <ul>
       {fiveDayForcast}
       </ul>
       </Layout>
      );
    
}

export default Weather