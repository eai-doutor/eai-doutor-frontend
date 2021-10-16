import { Component, OnInit, ViewChild } from '@angular/core';
import { APPEARD } from 'src/app/animations/appeard.animation';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexMarkers,
  ApexXAxis,
  ApexPlotOptions,
  ApexDataLabels,
  ApexResponsive,
  ApexLegend,
} from 'ng-apexcharts';
import {
  CHART_OPTIONS,
  COLUMN_CHART,
  MULTIPLE_RADIALBARS_CHART,
  RADIALBARS_CHART,
} from './charts.const';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  labels: string[];
  stroke: any;
  markers: ApexMarkers;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  responsive: ApexResponsive[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [APPEARD],
})
export class DashboardComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;

  public multipleRadialbarsChartOptions: Partial<ChartOptions> | any;
  public radialbarsChartOptions: Partial<ChartOptions> | any;
  public columnChartOptions: Partial<ChartOptions> | any;
  public chartOptions: Partial<ChartOptions> | any;
  public clicks: number = 0;
  public state = 'ready';

  constructor() {
    this.chartOptions = CHART_OPTIONS;
    this.columnChartOptions = COLUMN_CHART;
    this.radialbarsChartOptions = RADIALBARS_CHART;
    this.multipleRadialbarsChartOptions = MULTIPLE_RADIALBARS_CHART;
  }

  ngOnInit() {}

  public clickCount(): void {
    this.clicks++;
  }
}
