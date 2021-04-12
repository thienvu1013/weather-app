const key = "h0pnCyBpw0YWHVDOjRN6ZpJD0M6ndZp9";
let city = "calgary"


// get city informantion
const getCity = async (city)=>{
    const baseUrl = "https://dataservice.accuweather.com/locations/v1/cities/search";
    const query  = `?apikey=${key}&q=${city}`;
    const response = await fetch(baseUrl+query);
    const data = await response.json();
    return data[0];
};

// get weather information
const getWeather = async (id)=>{
    const baseUrl = "https://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`;
    const response = await fetch(baseUrl+query);
    const data = await response.json()
    return data[0];

}

// getCity(city).then(data=>{
//     return getWeather(data["Key"]);
// }).then(data=>{
//     console.log(data);
// }).catch(err=> console.log(err));