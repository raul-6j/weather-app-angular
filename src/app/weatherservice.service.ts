import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {
  apiKey='d378ed72189fb4648c3125223161bb81';

  constructor(private http:HttpClient) { }

  getWeather(city: string) {

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`;

  return this.http.get(apiUrl);
  }
}
