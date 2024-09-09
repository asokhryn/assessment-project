import {Component, ViewChild} from '@angular/core';
import {ChartComponent, NgApexchartsModule} from "ng-apexcharts";

@Component({
  selector: 'app-heat-map',
  standalone: true,
  imports: [
    NgApexchartsModule
  ],
  templateUrl: './heat-map.component.html',
  styleUrl: './heat-map.component.css'
})
export class HeatMapComponent {
  @ViewChild("chart") chart: ChartComponent | undefined ;
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Metric1",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric2",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric3",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric4",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric5",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric6",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric7",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric8",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric9",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        }
      ],
      chart: {
        height: 350,
        type: "heatmap"
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#e0e0e0", "#b0b0b0", "#808080", "#505050", "#303030"],
      title: {
        text: "HeatMap Chart (Greyscale)"
      }
    };
  }

  public generateData(count: any, yrange: any) {
    //data simulation
    let i = 0;
    const series = [];
    while (i < count) {
      var x = "w" + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }
}
