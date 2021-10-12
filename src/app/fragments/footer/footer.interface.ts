export interface IFooter {
  logo: string;
  instagram: string;
  facebook: string;
  copyright: string;
  details: IFooterDetails[];
}

export interface IFooterDetails {
  title: string;
  description: string;
}
