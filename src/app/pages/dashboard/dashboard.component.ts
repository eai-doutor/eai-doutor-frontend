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
  CARD_CONTENT,
  CHART_OPTIONS,
  MULTIPLE_RADIALBARS_CHART,
} from './dashboard.const';

import { ICard } from 'src/app/components/card/card.interface';

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
  public chartOptions: Partial<ChartOptions> | any;
  public clicks: number[] = [];
  public content!: ICard[];
  public state = 'ready';

  constructor() {
    this.chartOptions = CHART_OPTIONS;
    this.multipleRadialbarsChartOptions = MULTIPLE_RADIALBARS_CHART;
  }

  ngOnInit() {
    this.content = CARD_CONTENT;
    this.content.forEach(() => this.clicks.push(0));
  }

  public clickCount(index: number): void {
    this.clicks[index]++;
  }
}
