import { WeatherModel } from "../models/WeatherModel";
import { BehaviorSubject } from 'rxjs';

class WeatherService {
    weatherSubject = new BehaviorSubject(new WeatherModel());
    weatherObs = this.weatherSubject.asObservable();

    getWeather = city => {
        let appid = 'ca839a188f45a86eeddb76d944dade55';
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`)
            .then(res => res.json())
            .then(value => this.weatherSubject.next(new WeatherModel(city, value?.main?.temp)))
    }
}

const instance = new WeatherService();
export const weatherService = Object.freeze(instance);