import React from 'react';
import { Component } from 'react';

import SearchComponent from '../containers/search_component';
import WeatherList from '../containers/weather_list';

import '../app.css';


export default class App extends Component {
  render() {
    return (
      <div className='container main'>
      	<h2>Weather forecast for next 5 days/ 3 hours</h2>
        <SearchComponent />
        <WeatherList />
      </div>
    );
  }
}
