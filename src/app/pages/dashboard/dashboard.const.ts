export const CARD_CONTENT = [
  { title: 'Clicks' },
  { title: 'Clicks' },
  { title: 'Clicks' },
  { title: 'Clicks' },
];

export const CHART_OPTIONS = {
  series: [
    {
      name: 'TEAM A',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
      name: 'TEAM B',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    },
    {
      name: 'TEAM C',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
    },
  ],
  chart: {
    height: 350,
    type: 'line',
    stacked: false,
  },
  stroke: {
    width: [0, 2, 5],
    curve: 'smooth',
  },
  plotOptions: {
    bar: {
      columnWidth: '50%',
    },
  },

  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: 'vertical',
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100],
    },
  },
  labels: [
    '01/01/2003',
    '02/01/2003',
    '03/01/2003',
    '04/01/2003',
    '05/01/2003',
    '06/01/2003',
    '07/01/2003',
    '08/01/2003',
    '09/01/2003',
    '10/01/2003',
    '11/01/2003',
  ],
  markers: {
    size: 0,
  },
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    title: {
      text: 'Points',
    },
    min: 0,
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y: any) {
        if (typeof y !== 'undefined') {
          return y.toFixed(0) + ' points';
        }
        return y;
      },
    },
  },
};

export const RADIALBARS_CHART = {
  chart: {
    type: 'radialBar',
    height: 350,
    width: 380,
  },
  plotOptions: {
    radialBar: {
      size: undefined,
      inverseOrder: true,
      hollow: {
        margin: 5,
        size: '48%',
        background: 'transparent',
      },
      track: {
        show: false,
      },
      startAngle: -180,
      endAngle: 180,
    },
  },
  stroke: {
    lineCap: 'round',
  },
  series: [71, 63, 77],
  labels: ['Junho', 'Julho', 'Agosto'],
  legend: {
    show: true,
    floating: true,
    position: 'right',
    offsetX: 70,
    offsetY: 240,
  },
};

export const MULTIPLE_RADIALBARS_CHART = {
  series: [44, 55, 67, 83],
  chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function (w: any) {
            return '249';
          },
        },
      },
    },
  },
  labels: ['Advogados', 'Clientes', 'Administradores', 'Outros'],
};

export const COLUMN_CHART = {
  series: [
    {
      name: 'PRODUCT A',
      data: [44, 55, 41, 67, 22, 43, 21, 49],
    },
    {
      name: 'PRODUCT B',
      data: [13, 23, 20, 8, 13, 27, 33, 12],
    },
    {
      name: 'PRODUCT C',
      data: [11, 17, 15, 15, 21, 14, 15, 13],
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    stackType: '100%',
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  xaxis: {
    categories: [
      '2011 Q1',
      '2011 Q2',
      '2011 Q3',
      '2011 Q4',
      '2012 Q1',
      '2012 Q2',
      '2012 Q3',
      '2012 Q4',
    ],
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: 'right',
    offsetX: 0,
    offsetY: 50,
  },
};
