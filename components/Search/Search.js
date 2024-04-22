import React, { useState } from 'react';
import { fetchCities, fetchWeatherData } from '../../api/OpenWeatherService';

const Search = ({ onSearchChange, toggleTemperatureUnit }) => {
    const [searchValue, setSearchValue] = useState(null);
    const [error, setError] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    // const [isCelsius, setIsCelsius] = useState(true); // Default to Celsius

    const handleSearch = async () => {
        try {
            const citiesList = await fetchCities(searchValue.trim());
            console.log(citiesList);

            if (citiesList.data.length === 0) {
                throw new Error('City not found');
            }

            const city = citiesList.data[0];
            const formattedCity = {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`,
            };
            const [weatherResponse] = await fetchWeatherData(city.latitude, city.longitude);
            setWeatherData(weatherResponse);
            onSearchChange(formattedCity);
            setError('');
        } catch (error) {
            console.error(error.message);
            setError('City not found');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
        setError('');
    };

    // const toggleTemperatureUnit = () => {
    //     setIsCelsius(!isCelsius);
    // };

    // const convertTemperature = (temp) => {
    //     return isCelsius ? temp : (temp * 9) / 5 + 32;
    // };

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={searchValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    style={{
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        marginRight: '10px',
                        flex: '1',
                    }}
                />
                <button
                    onClick={handleSearch}
                    style={{
                        padding: '10px',
                        borderRadius: '5px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    Search
                </button>
            </div>
            {error && <div style={{ color: 'white', marginLeft: '10px' }}>{error}</div>}
            {/* {weatherData && (
                <div style={{ marginTop: '10px' }}>
                    <h3>Current Temperature: {convertTemperature(weatherData.main.temp).toFixed(2)}°{isCelsius ? 'C' : 'F'}</h3>
                </div>
            )}
            <div style={{ marginTop: '10px' }}>
                <button onClick={toggleTemperatureUnit}>
                    Toggle Unit ({isCelsius ? 'Fahrenheit' : 'Celsius'})
                </button>
            </div> */}
        </>
    );
};

export default Search;
