import { Box, Typography } from '@mui/material';
import React from 'react';

const MinMaxTempWeatherDetail = ({title, convertTemperature, isCelcius, temperature, description, minTemp, maxTemp}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '100%',
      }}
    >     
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontWeight: '600',
          fontSize: { xs: '12px', sm: '14px', md: '16px' },
          color: 'white',
          textTransform: 'uppercase',
          lineHeight: 1,
          marginBottom: '8px',
          fontFamily: 'Poppins',
        }}
      >
        {isCelcius ? `${(maxTemp)}°C/${(minTemp)}°C` : `${convertTemperature(Math.round(maxTemp))}°F/${convertTemperature(Math.round(minTemp))}°F`}
        {/* {(maxTemp)} ° / {(minTemp)} ° */}
      </Typography>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          fontSize: { xs: '10px', sm: '12px', md: '14px' },
          color: 'rgba(255,255,255, .7)',
          lineHeight: 1,
          letterSpacing: { xs: '1px', sm: '0' },
          fontFamily: 'Roboto Condensed',
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default MinMaxTempWeatherDetail;
