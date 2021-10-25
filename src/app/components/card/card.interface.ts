import { Target } from 'src/app/pages/home/home.interface';

export interface ICard {
  subtitle?: string | number;
  title: string;
  icon?: string;
  img?: string;
  target?: Target;
}
