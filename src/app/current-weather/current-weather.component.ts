import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from "../interfaces";
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  current: ICurrentWeather;

  constructor(private weatherService: WeatherService) { 
    this.current = {
      city: 'São Paulo',
      country: 'BR',
      date: Number(new Date().toLocaleString()),
      image: 'assets/img/sunny.png',
      temperature: 72,
      description: 'sunny',
    } as ICurrentWeather;
  }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather('Vila Olímpia', 'BR').subscribe((data) => this.current = data);
  }

}
