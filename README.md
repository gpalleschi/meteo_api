# meteo_api

Meteo API RESTful Node.js based use Free Weather API Open-Meteo to obtain data please read [documentation](https://open-meteo.com/en/docs).

## API Reference


```HTTP
GET /Meteo
```

Return weather data.

**Query parameters**  

| Param     | Type     | Description   | Mandatory                                                                                                                                                                                                                                                                                                                          |
| :-------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |---|
| lat | `decimal degrees`    | latitude  | Yes | 
| lon | `decimal degrees`    | longitude | Yes | 
| forecast_days | `integer`    | Forecast day Per default, only 7 days are returned. Up to 16 days of forecast are possible. | No | 
| for_cast_params | `string`    | Additional forecast parameters separated by comma, e.g. temperature_2m,precipitation,weathercode. | No | 
| daily | `boolean`    | Include daily forecast data (default false). | No | 
| daily_params | `string`    | Additional daily forecast parameters separated by comma, e.g. temperature_2m_max,temperature_2m_min,precipitation_sum. | No | 
| timezone | `string`    | Timezone for the forecast data. | No | 

**Response**  

See [Documentation](https://open-meteo.com/en/docs) on Open Meteo.

**Examples**

`http://localhost:35907/meteo?lat=40.693952&lon=-73.924557`

```
{
    "latitude": 40.69669,
    "longitude": -73.924286,
    "generationtime_ms": 0.14734268188476562,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 25,
    "current_weather_units": {
        "time": "iso8601",
        "interval": "seconds",
        "temperature": "°C",
        "windspeed": "km/h",
        "winddirection": "°",
        "is_day": "",
        "weathercode": "wmo code"
    },
    "current_weather": {
        "time": "2026-01-18T14:30",
        "interval": 900,
        "temperature": 0.6,
        "windspeed": 3.4,
        "winddirection": 328,
        "is_day": 1,
        "weathercode": 73
    }
}
```

`http://localhost:35907/meteo?lat=40.693952&lon=-73.924557&forecast_days=2&for_cast_params=temperature_2m,precipitation,weathercode`

```
{
    "latitude": 40.69669,
    "longitude": -73.924286,
    "generationtime_ms": 0.16427040100097656,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 25,
    "hourly_units": {
        "time": "iso8601",
        "temperature_2m": "°C",
        "precipitation": "mm",
        "weathercode": "wmo code"
    },
    "hourly": {
        "time": [
            "2026-01-18T00:00",
            "2026-01-18T01:00",
            "2026-01-18T02:00",
            "2026-01-18T03:00",
            "2026-01-18T04:00",
            "2026-01-18T05:00",
            "2026-01-18T06:00",
            "2026-01-18T07:00",
            "2026-01-18T08:00",
            "2026-01-18T09:00",
            "2026-01-18T10:00",
            "2026-01-18T11:00",
            "2026-01-18T12:00",
            "2026-01-18T13:00",
            "2026-01-18T14:00",
            "2026-01-18T15:00",
            "2026-01-18T16:00",
            "2026-01-18T17:00",
            "2026-01-18T18:00",
            "2026-01-18T19:00",
            "2026-01-18T20:00",
            "2026-01-18T21:00",
            "2026-01-18T22:00",
            "2026-01-18T23:00",
            "2026-01-19T00:00",
            "2026-01-19T01:00",
            "2026-01-19T02:00",
            "2026-01-19T03:00",
            "2026-01-19T04:00",
            "2026-01-19T05:00",
            "2026-01-19T06:00",
            "2026-01-19T07:00",
            "2026-01-19T08:00",
            "2026-01-19T09:00",
            "2026-01-19T10:00",
            "2026-01-19T11:00",
            "2026-01-19T12:00",
            "2026-01-19T13:00",
            "2026-01-19T14:00",
            "2026-01-19T15:00",
            "2026-01-19T16:00",
            "2026-01-19T17:00",
            "2026-01-19T18:00",
            "2026-01-19T19:00",
            "2026-01-19T20:00",
            "2026-01-19T21:00",
            "2026-01-19T22:00",
            "2026-01-19T23:00"
        ],
        "temperature_2m": [
            0.5,
            -0.5,
            -0.8,
            -0.7,
            -0.8,
            -0.7,
            -0.5,
            -0.6,
            -0.5,
            -0.5,
            -0.1,
            0.1,
            0.7,
            0.5,
            0.4,
            0.6,
            1,
            1.5,
            1.7,
            1.9,
            1.9,
            1.6,
            1.2,
            1,
            0.4,
            -0.2,
            -1.1,
            -1.8,
            -2.1,
            -2.1,
            -3.1,
            -2.8,
            -2.9,
            -2.5,
            -2.9,
            -3,
            -3.4,
            -4.2,
            -3.9,
            -3.6,
            -2.8,
            -2.1,
            -0.9,
            -0.2,
            0,
            -0.2,
            -0.9,
            -0.6
        ],
        "precipitation": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0.7,
            0.9,
            1.1,
            0.4,
            0,
            0,
            0.1,
            0.4,
            0.4,
            0.6,
            1.1,
            1.2,
            1.9,
            1.9,
            1.1,
            0.3,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "weathercode": [
            0,
            0,
            2,
            0,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            73,
            73,
            73,
            73,
            45,
            3,
            51,
            51,
            51,
            71,
            73,
            73,
            73,
            75,
            73,
            73,
            3,
            3,
            3,
            3,
            2,
            3,
            3,
            3,
            3,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            3,
            3,
            3,
            3
        ]
    }
}
```


`http://localhost:35907/meteo?lat=40.693952&lon=-73.924557&daily=true&daily_params=temperature_2m_max,temperature_2m_min`

```
{
    "latitude": 40.69669,
    "longitude": -73.924286,
    "generationtime_ms": 0.057816505432128906,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 25,
    "daily_units": {
        "time": "iso8601",
        "temperature_2m_max": "°C",
        "temperature_2m_min": "°C"
    },
    "daily": {
        "time": [
            "2026-01-18",
            "2026-01-19",
            "2026-01-20",
            "2026-01-21",
            "2026-01-22",
            "2026-01-23",
            "2026-01-24"
        ],
        "temperature_2m_max": [
            1.9,
            0.4,
            -0.7,
            -0.6,
            1.5,
            1.4,
            -5.1
        ],
        "temperature_2m_min": [
            -0.8,
            -4.2,
            -9.3,
            -8.8,
            -2.1,
            -6.3,
            -9.2
        ]
    }
}
```

This project is licensed under the GNU GENERAL PUBLIC LICENSE 3.0 License - see the [LICENSE](LICENSE) file for details  

<hr/>

