import { Component } from '@angular/core';
import {MatCard} from "@angular/material/card";
import {NgApexchartsModule} from "ng-apexcharts";
import {HeatMapComponent} from "../heat-map/heat-map.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCard,
    NgApexchartsModule,
    HeatMapComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public pieChartOptions: any = {
    chart: {
      type: 'pie',
      foreColor: '#0c0404',
      height: 350,
    },
    labels: ['30+ years', '40+ years', '20+ years', '50+ years'],
    series: [44, 55, 13, 43],
    colors: ['#2c2c2c', '#5e5e5e', '#a9a9a9', '#d9d9d9'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  public lineChartOptions: any = {
    chart: {
      type: 'line',
      height: 350,
      foreColor: '#0c0c0c'
    },
    series: [{
      name: 'Sales',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      labels: {
        style: {
          colors: ['#0c0c0c']
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: ['#0c0c0c']
        }
      }
    },
    stroke: {
      curve: 'smooth',
      colors: ['#FFFFFF']
    },
    grid: {
      borderColor: '#5e5e5e'
    }
  };
}
