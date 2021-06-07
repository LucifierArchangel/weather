import { setCurrentIcon, thermometer, cloud } from "../../importImg";
import style from "./weatherDisplay.module.css";

export function WeatherDisplay({ weatherMap }) {
  let miniTempLabel;
  let bigTempLabel;
  if (Array.isArray(weatherMap.temp)) {
    miniTempLabel = (
      <div>
        <span className={style.weatherData}>{weatherMap.temp[0]} C°</span>
        <br />
        <span className={style.weatherData}>{weatherMap.temp[1]} C°</span>
      </div>
    );
    bigTempLabel = (
      <div>
        <p className={style.feelsLikeTemperRed}>
          День {weatherMap.feels_like[0]} C°
        </p>
        <p className={style.feelsLikeTemperBlue}>
          Ночь {weatherMap.feels_like[1]} C°
        </p>
      </div>
    );
  } else {
    miniTempLabel = (
      <span className={style.weatherData}>{weatherMap.temp} C°</span>
    );
    bigTempLabel = (
      <p className={style.feelsLikeTemper}>{weatherMap.feels_like} C°</p>
    );
  }

  let currentIcon = setCurrentIcon(weatherMap.icon);

  return (
    <div className={style.weatherBlock}>
      <div className={style.weatherBigIcons}>
        <span className={style.weatherDescription}>
          {weatherMap.description}
        </span>
        <img
          className={style.weatherBigImg}
          src={currentIcon}
          alt="weatherIcon"
        />
        <span>Чувствуется как</span>
        {bigTempLabel}
      </div>
      <div className={style.weatherList}>
        <figure className={style.weatherItem}>
          <figcaption>Температура</figcaption>
          <img
            src={thermometer}
            alt="thermometer"
            className={style.weatherIcon}
          />
          {miniTempLabel}
        </figure>

        <figure className={style.weatherItem}>
          <figcaption>Облачность</figcaption>
          <img className={style.weatherIcon} src={cloud} alt="cloud" />
          <span className={style.weatherData}>{weatherMap.clouds} %</span>
        </figure>

        <figure className={style.weatherItem}>
          <figcaption>Давление</figcaption>
          <svg className={style.weatherIcon} viewBox="0 0 32 32">
            <path d="M7.574 10.036l3.408 3.219 1.136-1.136-3.408-3.219-1.136 1.136zM5.302 17.609h4.734v-1.515h-4.734v1.515zM16.095 0c-8.899 0-16.095 7.195-16.095 16.095s7.195 16.095 16.095 16.095 16.095-7.195 16.095-16.095-7.385-16.095-16.095-16.095zM16.095 29.728c-7.574 0-13.822-6.249-13.822-13.822s6.249-13.822 13.822-13.822 13.822 6.249 13.822 13.822c-0.189 7.763-6.249 13.822-13.822 13.822zM17.42 5.87h-1.515v4.734h1.515v-4.734zM23.479 8.331l-1.325-0.757-5.87 9.657c-0.947 0-1.704 0.379-2.272 0.947s-0.947 1.515-0.947 2.272c0 0.947 0.379 1.704 0.947 2.462 0.568 0.568 1.515 0.947 2.272 0.947 0.947 0 1.704-0.379 2.462-0.947 0.568-0.568 0.947-1.515 0.947-2.462 0-0.757-0.189-1.325-0.568-1.893l4.355-10.225zM22.154 16.095v1.515h4.734v-1.515h-4.734z"></path>
          </svg>
          <span className={style.weatherData}>{weatherMap.pressure}мм р.т</span>
        </figure>

        <figure className={style.weatherItem}>
          <figcaption>Влажность</figcaption>
          <svg className={style.weatherIcon} viewBox="0 0 27 32">
            <path d="M24.277 1.778c0.339 0.002 0.612 0.277 0.612 0.616 0 0.021-0.001 0.042-0.003 0.062l0-0.003-2.474 27.207c-0.025 0.315-0.288 0.562-0.607 0.562-0 0-0 0-0 0h-16.941c-0.32-0-0.583-0.246-0.609-0.559l-0-0.002-2.473-27.207c-0.002-0.018-0.003-0.039-0.003-0.060 0-0.161 0.062-0.308 0.163-0.417l-0 0c0.111-0.122 0.271-0.199 0.448-0.199 0 0 0 0 0.001 0h21.887zM24.277 0h-21.887c-1.32 0.002-2.389 1.073-2.389 2.393 0 0.078 0.004 0.154 0.011 0.23l-0.001-0.010 2.473 27.207c0.113 1.225 1.135 2.177 2.38 2.179h16.941c1.244-0.002 2.266-0.954 2.378-2.169l0.001-0.009 2.474-27.207c0.006-0.066 0.010-0.142 0.010-0.22 0-1.321-1.070-2.392-2.39-2.394h-0zM17.047 14.584c-4.017 0-6.075-3.26-9.384-3.26-1.183 0.023-2.304 0.266-3.331 0.689l0.061-0.022 1.485 16.339h14.908l1.422-15.62c-1.441 1.046-3.209 1.726-5.127 1.872l-0.034 0.002z"></path>
          </svg>
          <span className={style.weatherData}>{weatherMap.humidity}%</span>
        </figure>

        <figure className={style.weatherItem}>
          <figcaption>Ветер</figcaption>
          <svg className={style.weatherIcon} viewBox="0 0 60 32">
            <path d="M0.604 10.264c0.302-0.302 0.906-0.604 1.509-0.604h50.415c0.604 0 1.208-0.302 1.811-0.604s0.604-1.208 0.604-1.811-0.302-1.208-0.604-1.811-1.208-0.906-1.811-0.906c-0.604 0-1.208 0.302-1.811 0.906-0.302 0.302-0.906 0.604-1.509 0.604s-1.208-0.302-1.509-0.604c-0.302-0.302-0.604-0.906-0.604-1.509s0.302-1.208 0.604-1.811c1.208-1.208 3.019-2.113 4.83-2.113 2.113 0 3.623 0.604 5.132 2.113s2.113 3.019 2.113 5.132c0 1.811-0.604 3.623-2.113 4.83-1.509 1.509-3.019 2.113-5.132 2.113h-50.113c-0.604 0-1.208-0.302-1.509-0.604-0.604-0.604-0.906-1.208-0.906-1.811s0.302-0.906 0.604-1.509zM0.604 18.415c0.604-0.302 0.906-0.604 1.811-0.604h36.83c1.811 0 3.623 0.604 5.132 2.113s2.113 3.019 2.113 5.132-0.604 3.623-2.113 4.83c-1.509 1.208-3.019 2.113-5.132 2.113-1.811 0-3.623-0.604-4.83-2.113-0.604-0.302-0.604-0.906-0.604-1.509s0.302-1.208 0.604-1.509 0.906-0.604 1.509-0.604c0.604 0 1.208 0.302 1.509 0.604 0.604 0.302 1.208 0.604 1.811 0.604s1.208-0.302 1.811-0.604 0.604-1.208 0.604-1.811c0-0.604-0.302-1.509-0.906-1.811-0.604-0.604-1.208-0.906-1.811-0.906h-36.528c-0.604 0-1.208-0.302-1.509-0.604-0.604-0.604-0.906-0.906-0.906-1.509s0.302-1.208 0.604-1.811z"></path>
          </svg>
          <span className={style.weatherData}> {weatherMap.windSpeed} м/c</span>
        </figure>

        <figure className={style.weatherItem}>
          <figcaption>Ультрафиолет</figcaption>
          <svg className={style.weatherIcon} viewBox="0 0 42 32">
            <path d="M0 20.8c0-0.457 0.229-0.914 0.457-1.143s0.686-0.457 1.143-0.457h3.886c0.457 0 0.914 0.229 1.143 0.457s0.457 0.686 0.457 1.143c0 0.457-0.229 0.914-0.457 1.143s-0.457 0.457-0.914 0.457h-4.114c-0.457 0-0.914-0.229-1.143-0.457s-0.457-0.686-0.457-1.143zM1.829 30.4c0-0.457 0.229-0.914 0.457-1.143s0.686-0.457 1.143-0.457h34.743c0.457 0 0.914 0.229 1.143 0.457s0.457 0.686 0.457 1.143-0.229 0.914-0.457 1.143c-0.457 0.457-0.686 0.457-1.143 0.457h-34.743c-0.457 0-0.914 0-1.143-0.457-0.457-0.229-0.457-0.686-0.457-1.143zM5.714 7.314c0-0.457 0.229-0.914 0.457-1.143 0.229-0.457 0.686-0.457 1.143-0.457s0.914 0.229 1.143 0.457l2.743 2.743c0.229 0.229 0.457 0.686 0.457 1.143s-0.229 0.914-0.457 1.143-0.686 0.457-1.143 0.457c-0.457 0-0.686-0.229-1.143-0.457l-2.743-2.743c-0.457-0.229-0.457-0.686-0.457-1.143zM10.514 20.8c0 1.6 0.229 3.2 0.914 4.343 0 0.229 0.229 0.229 0.457 0.229h3.2c0.229 0 0.229 0 0.229-0.229 0 0 0-0.229-0.229-0.229-0.914-1.143-1.6-2.743-1.6-4.343 0.457-1.6 1.143-3.2 2.514-4.571s2.971-2.057 4.8-2.057c1.829 0 3.429 0.686 4.8 2.057s2.057 2.971 2.057 4.8c0 1.6-0.457 2.971-1.6 4.343 0 0.229 0 0.229 0 0.229s0 0 0 0.229c0 0 0 0 0.229 0h3.2c0.229 0 0.229 0 0.457-0.229 0.686-1.371 1.143-2.743 1.143-4.343 0-1.829-0.457-3.429-1.371-5.029s-2.057-2.743-3.657-3.657c-1.6-0.914-3.2-1.371-5.029-1.371s-3.886 0-5.257 0.914c-1.6 0.914-2.971 2.286-3.886 3.886s-1.371 3.2-1.371 5.029zM19.2 5.714v-4.114c0-0.457 0.229-0.914 0.457-1.143s0.686-0.457 1.143-0.457c0.457 0 0.914 0.229 1.143 0.457s0.457 0.686 0.457 1.143v3.886c0 0.457-0.229 0.914-0.457 1.143-0.229 0.457-0.686 0.686-1.143 0.686s-0.914-0.229-1.143-0.457-0.457-0.686-0.457-1.143zM29.943 10.057c0-0.457 0.229-0.914 0.457-1.143l2.743-2.743c0.229-0.457 0.686-0.457 1.143-0.457s0.914 0.229 1.143 0.457c0.229 0.229 0.457 0.686 0.457 1.143s-0.229 0.914-0.457 1.143l-2.971 2.743c-0.229 0.229-0.457 0.457-0.914 0.457s-0.914-0.229-1.143-0.457-0.457-0.686-0.457-1.143zM34.286 20.8c0-0.457 0.229-0.914 0.457-1.143s0.686-0.457 1.143-0.457h3.886c0.457 0 0.914 0.229 1.143 0.457s0.457 0.686 0.457 1.143c0 0.457-0.229 0.914-0.457 1.143s-0.686 0.457-1.143 0.457h-3.886c-0.457 0-0.914-0.229-1.143-0.457s-0.457-0.686-0.457-1.143z"></path>
          </svg>
          <span className={style.weatherData}> {weatherMap.uvi}</span>
        </figure>
      </div>
    </div>
  );
}
