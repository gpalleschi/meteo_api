const Constants = require('./constants');

// Meteo Controller

// lat  : latitude     format: decimal degrees  required: yes 
// lon  : longitude    format: decimal degrees  required: yes
// current_weather : include current weather data  format: boolean  required: no  default: true
// forecast_days : number of days for the forecast (1-16)  format: integer  required: no  default: 5
// for_cast_params : additional forecast parameters separated by comma, e.g. temperature_2m,precipitation,weathercode  format: string  required: no  default: temperature_2m
// daily : include daily forecast data  format: boolean  required: no  default: false
// daily_params : additional daily forecast parameters separated by comma, e.g. temperature_2m_max,temperature_2m_min,precipitation_sum  format: string  required: no  default: temperature_2m_max

// Example: /meteo?lat=45.07&lon=7.69&forecast_days=5&for_cast_params=temperature_2m,precipitation


const getMeteo = async (req, res) => {
    const {lat, lon, current_weather, forecast_days, for_cast_params, daily, daily_params} = req.query;
    let ret = {};

    // Validate parameters
    if (!lat || !lon) {
        ret = {
            "msg": "Parameters lat and lon are required.",
            "details": "",
            "error": true,
            "code": 400,
            "res": {}
        };
    } else {

        let url = Constants.METEO_API_URL + `?latitude=${lat}&longitude=${lon}`;

        if ( !forecast_days ) {
            if ( daily ) {
                if ( daily === 'true' ) {
                   url += `&daily=${daily_params ? daily_params : 'temperature_2m_max'}`;
                } else {
                   url += `&current_weather=true`;
                }
            } else {
                url += `&current_weather=true`;
            }
        } else {
            url += `&forecast_days=${forecast_days}`;
            if ( for_cast_params ) {
                url += `&hourly=${for_cast_params}`;
            } else {
                url += `&hourly=temperature_2m`;
            }
        }


        try {
            //TODO: Delete examples URLs
            // const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&forecast_days=5&hourly=temperature_2m`;
            // const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

            const response = await fetch(url);
            const data = await response.json();

            ret = {
                "msg": "OK",
                "details": "",
                "error": false,
                "code": 200,
                "res": data
            };
        } catch (error) {
            ret = {
                "msg": "Error retrieving weather data.",
                "details": error.message,
                "error": true,
                "code": 500,
                "res": {}
            };
        }
    }
    return ret;
}

module.exports = {
  getMeteo : getMeteo
};