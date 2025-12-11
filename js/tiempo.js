document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('inTiempo')
  if(!container) return;

  container.innerHTML = `
    <div id="container-weather" class="container-weather">
      <div id="location-weather" class="location-weather">
      </div>
      <div id="current-weather" class="current-weather">
      </div>
      <div id="hours-weather" class="hours-weather">
      </div>
      <div class="fuente">Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a></div>
    </div>
  `
  
  const containerWeatherCity = document.getElementById('location-weather')
  const currentWeatherContainer = document.getElementById('current-weather')
  const hoursWeatherContainer = document.getElementById('hours-weather')

  async function weather() {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=1b82155df01d4766a08100320251012&q=Villarrobledo&days=1&aqi=no&alerts=no`)   
      if (!response.ok) {
        throw new Error('Error: ')
      }
    
    const data = await response.json()

    const getLocation = data.location
    const getCurrent = data.current
    const getHours = data.forecast.forecastday[0].hour

    containerWeatherCity.innerHTML = `
    <h2>${getLocation.name} | ${getLocation.region}</h2>
    `
      renderizarCurrent(getCurrent)
      renderizarHours(getHours) 
    } 
    catch (error) {
      console.log('Error: ', error)
    }
  }

  function renderizarCurrent(current) {
    currentWeatherContainer.innerHTML = `
      <div class="current-data">
        <img class="icon-weather" src="${current.condition.icon}" alt ="${current.condition.text}"/>
        <p class="temp">${current.temp_c}°C</p>
      </div>
      <ul class="listado-current">
        <li>Humedad: ${current.humidity} %</li>
        <li>Viento: ${current.wind_kph} km/h</li>
        <li>Precipitaciones: ${current.precip_mm} mm</li>
      </ul>
    `
  }

  function renderizarHours(hours) {
    hoursWeatherContainer.innerHTML = hours.map( hour => 
    `
    <div class"hours-data">
      <p class="hora-weather">${hour.time.split(' ')[1]}</p>
      <img class="icon-weather" src="${hour.condition.icon}" alt="${hour.condition.text}"/>
      <p class="temp">${hour.temp_c}°C</p>
    </div>
    `).join('')
  }
  weather()
})