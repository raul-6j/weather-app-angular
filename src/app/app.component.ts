import { Component, OnInit } from '@angular/core';
import { WeatherserviceService } from './weatherservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  city = 'New Delhi';
  weatherData: any;

  constructor(private weatherService: WeatherserviceService) {}

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe(data => {
      this.weatherData = data;
      console.log(data);
      this.clearCityInput();
    });
  }

  clearCityInput() {
    this.city = '';
  }
}



// import { Component } from '@angular/core';
// import { WeatherserviceService } from './weatherservice.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   city: string = 'New Delhi';  // Set default city name here
//   weatherData: any;

//   constructor(private weatherService: WeatherserviceService) {
//     // You can set the default city here or in ngOnInit lifecycle hook
//     // this.city = 'New Delhi';
//   }

//   getWeather() {
//     this.weatherService.getWeather(this.city).subscribe(data => {
//       this.weatherData = data;
//       console.log(this.city);
//       console.log(data);
//     });
//   }
// }
