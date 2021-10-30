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

import { CHART_OPTIONS } from './dashboard.const';

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

  public chartOptions: Partial<ChartOptions> | any;
  public cardClass: string;
  public state = 'ready';

  constructor() {
    this.chartOptions = CHART_OPTIONS;
    this.cardClass = 'col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3';
  }

  ngOnInit() {}
}
