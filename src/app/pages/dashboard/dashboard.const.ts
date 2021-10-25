export const CARD_CONTENT = [
  { title: 'Clicks' },
  { title: 'Clicks' },
  { title: 'Clicks' },
  { title: 'Clicks' },
];

export const CHART_OPTIONS = {
  series: [
    {
      name: 'Advogados',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 62],
    },
    {
      name: 'Clientes',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 60],
    },
    {
      name: 'Administradores',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 52],
    },
  ],
  chart: {
    fontFamily: '"Montserrat", sans-serif',
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: true,
        selection: false,
        zoom: false,
        zoomin: true,
        zoomout: true,
        pan: false,
        customIcons: [],
      },
    },
    height: 450,
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
    '01/01/2021',
    '02/02/2021',
    '03/03/2021',
    '04/04/2021',
    '05/05/2021',
    '06/06/2021',
    '07/07/2021',
    '08/08/2021',
    '09/09/2021',
    '10/10/2021',
    '11/11/2021',
  ],
  markers: {
    size: 0,
  },
  xaxis: {
    type: 'category',
    categories: [
      'Jan/2021',
      'Fev/2021',
      'Mar/2021',
      'Abr/2021',
      'Maio/2021',
      'Jun/2021',
      'Jul/2021',
      'Ago/2021',
      'Set/2021',
      'Out/2021',
      'Nov/2021',
      'Dez/2021',
    ],
  },
  yaxis: {
    min: 0,
  },
  tooltip: {
    theme: 'dark',
    shared: true,
    intersect: false,
    y: {
      formatter: (y: any) => {
        if (typeof y !== 'undefined') {
          return y.toFixed(0) + ' acessos';
        }
        return y;
      },
    },
  },
};

export const MULTIPLE_RADIALBARS_CHART = {
  series: [44, 55, 67, 83],
  chart: {
    height: 350,
    width: 300,
    type: 'radialBar',
    fontFamily: '"Montserrat", sans-serif',
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
