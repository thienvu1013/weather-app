const key = "h0pnCyBpw0YWHVDOjRN6ZpJD0M6ndZp9";
let city = "calgary"


class Forecast{
    constructor(){
        this.key = "h0pnCyBpw0YWHVDOjRN6ZpJD0M6ndZp9";
        this.weatherURI = "https://dataservice.accuweather.com/currentconditions/v1/";
        this.cityURI = "https://dataservice.accuweather.com/locations/v1/cities/search";
    }

    // updating the city and get its weather condition
    async updateCity(city){
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        return {
            'cityDets':cityDets,
            'weather':weather
        };
    }

        // get city informantion
    async getCity(city){
        const query  = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI+query);
        const data = await response.json();
        return data[0];
    };

    // get weather information
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI+query);
        const data = await response.json()
        return data[0];
    }
}
