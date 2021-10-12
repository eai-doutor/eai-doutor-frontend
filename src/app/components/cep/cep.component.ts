import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CEPService } from 'src/app/services/cep.service';
import { catchError } from 'rxjs/operators';
import { ICEP, IError } from './cep.interface';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss'],
})
export class CepComponent implements OnInit {
  public isLoading: boolean = false;
  public error: IError = {
    content: null,
    isError: false,
    origin: '',
  };

  @Output() addressByCepEvent = new EventEmitter<ICEP>();
  @Input() form!: FormGroup;

  constructor(private cepService: CEPService) {}

  public findAddressByCEP(cep: any, origin: string) {
    if (!cep) return;

    let cepOnlyNumbers: string = '';

    if (origin === 'template') {
      cepOnlyNumbers = cep?.target?.value?.replace(/\.|\-/g, '');
    }

    if (origin === 'controller') {
      cepOnlyNumbers = cep?.replace(/\.|\-/g, '');
    }

    if (cepOnlyNumbers?.length !== 8) return;

    this.isLoading = true;

    setTimeout(() => {
      this.cepService
        .getAddress(cepOnlyNumbers)
        .pipe(
          catchError((err) => {
            this.error.isError = true;
            this.isLoading = false;
            return (this.error.content = err);
          })
        )
        .subscribe((cep: any) => {
          this.addressByCepEvent.emit(cep);
          this.isLoading = false;
        });
    }, 500);
  }

  ngOnInit(): void {
    const cep = this.form.value.cep;
    this.findAddressByCEP(cep, 'controller');
  }
}
