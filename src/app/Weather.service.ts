import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey: string = '247a1d5898810fffa12d9fb7fc415829';
  private apiUrl: string = 'https://api.openweathermap.org/data/2.5/forecast';
  constructor(private http: HttpClient) {}
  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&units=metric&appid=${this.apiKey}`;
    return this.http
      .get<any>(url)
      .pipe(map((data) => this.extractDailyForecast(data)));
  }
  private extractDailyForecast(data: any): any {
    const dailyData = [];
    const forecastList = data.list;

    let currentDay = null;
    try {
      for (let forecast of forecastList) {
        const date = new Date(forecast.dt_txt);
        const day = date.getDate();
        const hour = date.getHours();

        if (day !== currentDay && hour >= 12) {
          dailyData.push(forecast);
          currentDay = day;
        }
      }
      return {
        city: data.city,
        current: data.list[0],
        hourly: dailyData.slice(0, 8),
        daily: dailyData,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
