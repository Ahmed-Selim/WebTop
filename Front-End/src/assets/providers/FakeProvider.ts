export const fakeTime: object = {
    'week_number': '47',
    'utc_offset': '+02:00',
    'unixtime': '1542698045',
    'timezone': 'Africa/Cairo',
    'dst_until': null,
    'dst_from': null,
    'dst': false,
    'day_of_year': 324,
    'day_of_week': 2,
    'datetime': '2018-11-20T09:14:05.232107+02:00',
    'abbreviation': 'EET'
};

export const fakeQuote: object = {
    'qotd_date': '2018-11-21T00:00:00.000+00:00',
    'quote': {
    'id': 28211,
    'dialogue': false,
    'private': false,
    'tags': [
    'government', 'quote'
    ],
    'url': 'https://favqs.com/quotes/voltaire/28211-the-ideal-for-',
    'favorites_count': 0,
    'upvotes_count': 1,
    'downvotes_count': 0,
    'author': 'Voltaire',
    'author_permalink': 'voltaire',
    'body': 'The ideal form of government is democracy tempered with assassination.'
    }
};

export const fakeWeather: object = {
    'consolidated_weather': [
    {
        'id': 5231953072619520,
        'weather_state_name': 'Light Cloud',
        'weather_state_abbr': 'lc',
        'wind_direction_compass': 'WNW',
        'created': '2019-06-21T10:46:49.993410Z',
        'applicable_date': '2019-06-21',
        'min_temp': 24.04,
        'max_temp': 31.585,
        'the_temp': 31.005,
        'wind_speed': 7.98663381771521,
        'wind_direction': 288.50892944488675,
        'air_pressure': 1013.69,
        'humidity': 60,
        'visibility': 13.978055654974945,
        'predictability': 70
    }, {
        'id': 5439399577780224,
        'weather_state_name': 'Light Cloud',
        'weather_state_abbr': 'lc',
        'wind_direction_compass': 'WNW',
        'created': '2019-06-21T10:46:52.740173Z',
        'applicable_date': '2019-06-22',
        'min_temp': 24.14,
        'max_temp': 31.354999999999997,
        'the_temp': 31.009999999999998,
        'wind_speed': 9.199753378467086,
        'wind_direction': 281.6163979291252,
        'air_pressure': 1014.5350000000001,
        'humidity': 60,
        'visibility': 14.024347808796627,
        'predictability': 70
    }, {
        'id': 6674859268505600,
        'weather_state_name': 'Heavy Cloud',
        'weather_state_abbr': 'hc',
        'wind_direction_compass': 'WNW',
        'created': '2019-06-21T10:46:56.105537Z',
        'applicable_date': '2019-06-23',
        'min_temp': 23.91,
        'max_temp': 30.925,
        'the_temp': 30.605,
        'wind_speed': 9.24234762550969,
        'wind_direction': 285.7301147926066,
        'air_pressure': 1013.255,
        'humidity': 63,
        'visibility': 14.062251451523105,
        'predictability': 71
    }, {
        'id': 5337076008484864,
        'weather_state_name': 'Heavy Cloud',
        'weather_state_abbr': 'hc',
        'wind_direction_compass': 'N',
        'created': '2019-06-21T10:46:59.298407Z',
        'applicable_date': '2019-06-24',
        'min_temp': 23.450000000000003,
        'max_temp': 29.310000000000002,
        'the_temp': 27.485,
        'wind_speed': 7.0890924650653515,
        'wind_direction': 7.315045445516411,
        'air_pressure': 1013.6600000000001,
        'humidity': 68,
        'visibility': 14.122524457170126,
        'predictability': 71
    }, {
        'id': 5421742296137728,
        'weather_state_name': 'Light Cloud',
        'weather_state_abbr': 'lc',
        'wind_direction_compass': 'NW',
        'created': '2019-06-21T10:47:01.980724Z',
        'applicable_date': '2019-06-25',
        'min_temp': 22.86,
        'max_temp': 32.515,
        'the_temp': 32.565,
        'wind_speed': 6.8293412744001705,
        'wind_direction': 307.6427750450316,
        'air_pressure': 1013.175,
        'humidity': 55,
        'visibility': 14.27786725522946,
        'predictability': 70
    }, {
        'id': 5899339304009728,
        'weather_state_name': 'Light Cloud',
        'weather_state_abbr': 'lc',
        'wind_direction_compass': 'WSW',
        'created': '2019-06-21T10:47:04.826813Z',
        'applicable_date': '2019-06-26',
        'min_temp': 22.78,
        'max_temp': 31.62,
        'the_temp': 34.87,
        'wind_speed': 5.144576871072934,
        'wind_direction': 258.5,
        'air_pressure': 1018.96,
        'humidity': 58,
        'visibility': 9.999726596675416,
        'predictability': 70
    }],
    'time': '2019-06-21T15:10:51.616652+02:00',
    'sun_rise': '2019-06-21T04:56:41.685899+02:00',
    'sun_set': '2019-06-21T19:07:27.700241+02:00',
    'timezone_name': 'LMT',
    'parent': {
        'title': 'Egypt',
        'location_type': 'Country',
        'woeid': 23424802,
        'latt_long': '26.837090,30.796391'
    },
    'sources': [{'title': 'BBC',
    'slug': 'bbc',
    'url': 'http://www.bbc.co.uk/weather/',
    'crawl_rate': 180},
    {'title': 'Forecast.io',
    'slug': 'forecast-io',
    'url': 'http://forecast.io/',
    'crawl_rate': 480},
    {'title': 'Met Office',
    'slug': 'met-office',
    'url': 'http://www.metoffice.gov.uk/',
    'crawl_rate': 180},
    {'title': 'OpenWeatherMap',
    'slug': 'openweathermap',
    'url': 'http://openweathermap.org/',
    'crawl_rate': 360},
    {'title': 'Weather Underground',
    'slug': 'wunderground',
    'url': 'https://www.wunderground.com/?apiref=fc30dc3cd224e19b',
    'crawl_rate': 720},
    {'title': 'World Weather Online',
    'slug': 'world-weather-online',
    'url': 'http://www.worldweatheronline.com/',
    'crawl_rate': 360},
    {'title': 'Yahoo',
    'slug': 'yahoo',
    'url': 'http://weather.yahoo.com/',
    'crawl_rate': 180}],
    'title': 'Alexandria',
    'location_type': 'City',
    'woeid': 1522006,
    'latt_long': '31.210489,29.912430',
    'timezone': 'Africa/Cairo'
};
