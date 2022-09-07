import axios from 'axios'


export async function Mainpage(){

    const Result = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=new%20york%20city&appid=728cd29fbcfc6b7e50251ed54f211294&units=imperial`)

        
    .then(({ data }) => {
        return data;
      });
      return Result;
    
}

// export async function Mainpage(){

//     const Result = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=40.730610&lon=-73.935242&exclude=hourly,minutely,current,alerts&units=imperial&appid=728cd29fbcfc6b7e50251ed54f211294`)

        
//     .then(({ data }) => {
//         return data;
//       });
//       return Result;
    
// }