"use client"
import React, { useState } from 'react'
import axios from 'axios'
import { HttpsProxyAgent } from 'https-proxy-agent'

const weatherApi = 'https://api.weather.gov/points/'

function getWeather() {

    const [location, setLocation] = useState<GeolocationPosition>()
    const [locationError, setLocationError] = useState()
    
    const gotLocation = (position: GeolocationPosition) => {
        setLocation(position)
    }
    const handleGeoError = (error: any) => {
        setLocationError(error)
    }
    
    // Get user location
    navigator.geolocation.getCurrentPosition(gotLocation, handleGeoError)
    
    const httpsAgent = new HttpsProxyAgent(weatherApi)

    axios({
        method: 'get',
        url: weatherApi + `${location?.coords.latitude},${location?.coords.longitude}`,
        httpAgent: httpsAgent
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })    

  return (
    <div>
        <div>Lat: {location?.coords.latitude}</div>
        <div>Lon: {location?.coords.longitude}</div>
    </div>
  )
}

export default getWeather