import axios from 'axios'


export async function Mainpage(){

    const Result = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=new%20york%20city&appid=728cd29fbcfc6b7e50251ed54f211294&units=imperial`)

        
    .then(({ data }) => {
        return data;
      });
      return Result;
    
}