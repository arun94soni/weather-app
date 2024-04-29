import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import AirConditions from './AirConditions/AirConditions';
import DailyForecast from './Forecast/DailyForecast';
import Details from './Details/Details';

const TodayWeather = ({ data, forecastList, toggleTemperatureUnit, convertTemperature, isCelcius }) => {

  useEffect(() => {
    console.log('Today Weather Celcius--', isCelcius);
  }, [isCelcius])
  return (
    <Grid container sx={{ padding: '3rem 0rem 0rem' }}>
      <Details data={data}
        toggleTemperatureUnit={toggleTemperatureUnit}
        convertTemperature={convertTemperature} // Pass the function as a prop
        isCelcius={isCelcius} // Pass the isCelsius state to the Search component 
      />
      <AirConditions data={data}
        toggleTemperatureUnit={toggleTemperatureUnit}
        convertTemperature={convertTemperature} // Pass the function as a prop
        isCelcius={isCelcius} // Pass the isCelsius state to the Search component
      />
      <DailyForecast data={data} forecastList={forecastList}
        toggleTemperatureUnit={toggleTemperatureUnit}
        convertTemperature={convertTemperature} // Pass the function as a prop
        isCelcius={isCelcius} // Pass the isCelsius state to the Search component
      />
    </Grid>
  );
};

export default TodayWeather;
