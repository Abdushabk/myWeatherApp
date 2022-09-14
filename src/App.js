
import './App.css';
import weatherBg from '../../weather-app/src/assets/weatherBg.jpg'
import weatherIcon from '../../weather-app/src/assets/weatherIcon.png'
import Description from './components/Description';
import { useEffect } from 'react';
import { getFormattedWeatherData } from './weatherService';


function App() {
  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData('aleppo')
    }
    fetchWeatherData()
  }, [])



  return (
    <div className="App" style={{ backgroundImage: `url(${weatherBg})` }}>
      <div className='overlay'>
        <div className='container'>
          <div className='section section_inputs'>
            <input type="text" name='city' placeholder='Enter City..'></input>
            <button>°F</button>
          </div>

          <div className="section section_temprature">
            <div className='icon'>
              <h3>London, GB</h3>
              <img className='wIcon' src={weatherIcon} alt='couldy' />
              <h3>Cloudy</h3>
            </div>
            <div className='temprature'>
              <h1>34 °C</h1>
            </div>
          </div>
          <Description />
        </div>
      </div>

    </div>
  );
}

export default App;
