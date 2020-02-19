import React, { Component, Fragment } from 'react';
import { weatherService } from '../services/WeatherService';
import { WeatherModel } from '../models/WeatherModel';

export class WeatherComp extends Component {
    _weatherSubscription;

    state = {
        city: "",
        weatherModel: new WeatherModel()
    };

    componentDidMount() {
        this._weatherSubscription = weatherService.weatherObs.subscribe(obs => this.setState({ weatherModel: obs }));
    }

    componentWillUnmount() {
        this._weatherSubscription.unsubscribe();
    }

    clicked = () => {
        weatherService.getWeather(this.state.city);
    }

    handleCity = event => {
        this.setState({ city: event.target.value });
    }

    render() {
        return (
            <Fragment>
                <div>Ville</div>
                <input type="text" onChange={this.handleCity} />
                <button onClick={this.clicked}>Valider</button>
                <p>Température : {this.state.weatherModel.temp}° F</p>
            </Fragment>
        );
    }
}