import { Injectable } from '@angular/core';
export interface IUserInfo {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  cargo?: string;
  token?: string;
}

export enum PositionType {
  ADVOGADO = 'Advogado',
  CLIENTE = 'Cliente',
  ADM = 'Administrador',
}

@Injectable({ providedIn: 'root' })
export class UserService {
  public user!: IUser;

  constructor() {
    this.user = {
      email: '',
      password: '',
      name: '',
      token: this.getAleatoryToken(),
    };
  }

  public getAleatoryToken() {
    return new Date().getTime().toString();
  }

  public create(user: IUser): IUser {
    const newUser: IUser = {
      name: user.name,
      email: user.email,
      password: user.password,
      cargo: PositionType.CLIENTE,
      token: this.getAleatoryToken(),
    };

    return newUser;
  }

  public login(email: string, password: string): void {
  }

  public isLoggedIn(): void {
  }

  public logout(): void {
  }
}
