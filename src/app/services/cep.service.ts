import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VIA_CEP_API } from '../app.api';
import { ICEP } from '../components/cep/cep.interface';

@Injectable({ providedIn: 'root' })
export class CEPService {
  constructor(private httpClient: HttpClient) {}

  public getAddress(cep: string): Observable<ICEP> {
    return this.httpClient.get<ICEP>(`${VIA_CEP_API}${cep}/json`);
  }
}
