import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
// const options = 
// };


export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {

            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,

            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
            }
        });
        return data;
    }
    catch (error) {
        console.log(error);
    }
}
export const getWeatherData = async (lat, lng) => {
    try {
        if (lat && lng) {

            const { data: { data } } = await axios.get(`https://community-open-weather-map.p.rapidapi.com/find`, {

                params: {

                    lat: lat,
                    lon: lng

                },
                headers: {
                    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
                }
            });

            return data;
        }

    }
    catch (error) {
        console.log(error);
    }
}
