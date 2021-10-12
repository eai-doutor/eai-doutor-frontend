export enum Target {
  ADVOGADO = 'Advogado',
  CLIENTE = 'Cliente',
  ADM = 'Administrador',
  AJUDA = 'Ajuda',
  CP = 'Consulta Processual',
  BE = 'Busca por Estado',
  CONTATOS = 'Contatos',
  JUSRISPRUDENCIA = 'Jurisprudência'
}

export interface IContent {
  subtitle: string;
  title: string;
  icon?: string;
  img?: string;
  target?: Target;
}

export const CARD_CONTENT = [
  {
    title: 'SOU ADVOGADO',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    icon: 'fa fa-gavel',
    target: Target.ADVOGADO,
  },
  {
    title: 'SOU CLIENTE',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    icon: 'fa fa-user-circle-o',
    target: Target.CLIENTE,
  },
  {
    title: 'SOU ADMINISTRADOR',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    icon: 'fa fa-star-o',
    target: Target.ADM,
  },
  {
    title: 'QUERO AJUDA',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    icon: 'fa fa-question-circle-o',
    target: Target.AJUDA,
  },
];

export const CARD_CONTENT_CAMINHO_ADVOGADO = [
  {
    title: 'CONSULTA PROCESSUAL',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    icon: 'fa fa-gavel',
    target: Target.CP,
  },
  {
    title: 'EMISSÃO DE CUSTAS',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    icon: 'fa fa-gavel',
    target: Target.BE,
  },
  {
    title: 'CONTATOS',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    icon: 'fa fa-gavel',
    target: Target.CONTATOS,
  },
  {
    title: 'JUSRISPRUDÊNCIA',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    icon: 'fa fa-gavel',
    target: Target.JUSRISPRUDENCIA,
  },
];

export const CARD_CONTENT_CAMINHO_CLIENTE = [
  {
    title: 'CÍVEL',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    icon: 'fa fa-user-circle-o',
  },
  {
    title: 'FAMÍLIA',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    icon: 'fa fa-user-circle-o',
  },
  {
    title: 'TRABALHISTA',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    icon: 'fa fa-user-circle-o',
  },
  {
    title: 'EXTRAJUDICIAL',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    icon: 'fa fa-user-circle-o',
  },
];

export const CARD_CONTENT_CAMINHO_ADM = [
  {
    title: 'OPÇÃO 1',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    icon: 'fa fa-star-o',
  },
  {
    title: 'OPÇÃO 2',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    icon: 'fa fa-star-o',
  },
  {
    title: 'OPÇÃO 3',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    icon: 'fa fa-star-o',
  },
  {
    title: 'OPÇÃO 4',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    icon: 'fa fa-star-o',
  },
];

export const CARD_CONTENT_CAMINHO_AJUDA = [
  {
    title: 'OPÇÃO 1',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    icon: 'fa fa-question-circle-o',
  },
  {
    title: 'OPÇÃO 2',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    icon: 'fa fa-question-circle-o',
  },
  {
    title: 'OPÇÃO 3',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    icon: 'fa fa-question-circle-o',
  },
  {
    title: 'OPÇÃO 4',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    icon: 'fa fa-question-circle-o',
  },
];

export const CARD_CONTENT_CAMINHO_CONSULTA_PROCESSUAL = [
  {
    title: 'BUSCA POR NÚMERO',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    icon: 'fa fa-gavel',
  },
];

export const CARD_CONTENT_CAMINHO_BUSCA_POR_ESTADO = [
  {
    title: 'BUSCA POR ESTADO',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    icon: 'fa fa-gavel',
  },
];

export const CARD_CONTENT_CAMINHO_CONTATOS = [
  {
    title: 'LISTA DE CONTATOS',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    icon: 'fa fa-gavel',
  },
];

export const CARD_CONTENT_CAMINHO_JUSRISPRUDENCIA = [
  {
    title: 'BUSCA DE JUSRISPRUDENCIA',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    icon: 'fa fa-gavel',
  },
];
