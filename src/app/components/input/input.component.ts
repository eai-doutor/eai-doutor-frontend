import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { APPEARD } from 'src/app/animations/appeard.animation';
import { FormatterLib } from 'src/app/lib/formatter.lib';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  animations: [APPEARD],
})
export class InputComponent implements OnInit, AfterViewInit {
  public isRequiredError: boolean;
  public isEmailError: boolean;
  public hasError: boolean;
  public state = 'ready';

  @Input() form!: FormGroup;
  @Input() label!: string;
  @Input() type!: string;
  @Input() placeholder!: string;
  @Input() control!: string;
  @Input() required: boolean;
  @Input() disabled: boolean;

  constructor(private cdr: ChangeDetectorRef, private formatter: FormatterLib) {
    this.isRequiredError = false;
    this.isEmailError = false;
    this.hasError = false;
    this.required = false;
    this.disabled = false;
  }

  ngOnInit(): void {
    if (this.disabled) { this.form.get(this.control)?.disable({ onlySelf: true, emitEvent: false }); }
  }

  get mask(): string {
    switch (this.type) {
      case 'cpf':
        return this.formatter.masks.cpf;
      case 'cnpj':
        return this.formatter.masks.cnpj;
      case 'tel':
        return this.formatter.masks.tel;
      case 'cel':
        return this.formatter.masks.cel;
      case 'number':
        return this.formatter.masks.number;
      case 'date':
        return this.formatter.masks.date;
      case 'cep':
        return this.formatter.masks.cep;
      case 'cnh':
        return this.formatter.masks.cnh;
      case 'account':
        return this.formatter.masks.account;
      case 'agency':
        return this.formatter.masks.agency;
      case 'currency':
        return this.formatter.masks.currency;
    }

    return '';
  }

  ngAfterViewInit() {
    this.form.valueChanges.pipe(debounceTime(500)).subscribe(() => {
      this.hasError = this.form.get(this.control)?.errors && (this.form.get(this.control)?.dirty || this.form.get(this.control)?.touched) ? true : false;
      this.isRequiredError = this.form.get(this.control)?.errors?.required;
      this.isEmailError = this.form.get(this.control)?.errors?.pattern;
      this.cdr.detectChanges();
    });
  }
}
