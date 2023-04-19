import axios from 'axios';

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = 'f109d6a35f66ee792f08d222c9a7becc';

export const getWeatherData = async (city) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${city}&appid=${apiKey}`);
        return data;
    }catch(error) {
        throw error;
    }
}