
import './App.css';
import weatherBg from '../../weather-app/src/assets/weatherBg.jpg'
// import weatherIcon from '../../weather-app/src/assets/weatherIcon.png'
import Description from './components/Description';
import { useEffect, useState } from 'react';
import { getFormattedWeatherData } from './weatherService';


function App() {

  const [weather, setWeather] = useState(null)
  const [units, setUnits] = useState('metric')
  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData('aleppo', units)
      setWeather(data)
    }
    fetchWeatherData()
  }, [])



  return (
    <div className="App" style={{ backgroundImage: `url(${weatherBg})` }}>
      <div className='overlay'>
        {weather && (<div className='container'>
          <div className='section section_inputs'>
            <input type="text" name='city' placeholder='Enter City..'></input>
            <button>°F</button>
          </div>

          <div className="section section_temprature">
            <div className='icon'>
              <h3>{`${weather.name}, ${weather.country}`}</h3>
              <img className='wIcon' src={weather.iconURL} alt='weatherIcon' />
              <h3>{weather.description}</h3>
            </div>
            <div className='temprature'>
              <h1>{`${weather.temp.toFixed()} °${units === "metric" ? "C" : "F"}`}</h1>
            </div>
          </div>
          <Description weather={weather} units={units}/>
        </div>)}

      </div>

    </div>
  );
}

export default App;
