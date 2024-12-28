import './style.css'
import 'boxicons'

document.querySelector('#app').innerHTML = `
      <div class="container">
        <div class="search-box">
            <i class="bx bxs-map"></i>
            <input type="text" placeholder="Escribe tu ubicación" />
            <button class="bx bx-search"></button>
        </div>

        <div class="weather-box">
            <div class="box">
                <div class="info-weather">
                    <div class="weather">
                        <img src="src/images/cloud.png" alt="Weather Icon">
                        <p>16<span>°C</span></p>
                        <p class="description">Broken clouds</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="weather-details">
            <div class="humidity"nato>
                <i class="bx bxs-water"></i>
                <div class="text">
                    <div class="info-humidity">
                        <span>0%</span>
                    </div>
                    <p>Humidity</p>
                </div>
            </div>

            <div class="wind">
                <i class="bx bxs-wind"></i>
                <div class="text">
                    <div class="info-wind">
                        <span>0Km/h</span>
                    </div>
                    <p>Wind Speed</p>
                </div>
            </div>
        </div>
    </div>

`