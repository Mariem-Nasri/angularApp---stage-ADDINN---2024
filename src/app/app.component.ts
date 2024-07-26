import { Component } from '@angular/core';
import { WeatherService } from './Weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
sun: any;
getWeather() {
throw new Error('Method not implemented.');
}
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  city: string = '';
  weather: any;
  hour: any;
  week: any;

  constructor(private weatherService: WeatherService) {}

 
  seeWeather() {
    try {

      this.weatherService.getWeather(this.city).subscribe((weatherData) => {
        this.weather = weatherData.current;
        this.hour = weatherData.hourly;
        this.week = weatherData.daily;
      });
    } catch (error) {
      console.error('Error displaying weather data', error);
    }
  }
}
