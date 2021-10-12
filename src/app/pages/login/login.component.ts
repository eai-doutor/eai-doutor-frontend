import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APPEARD } from 'src/app/animations/appeard.animation';
import { NotificationService } from 'src/app/services/notification.service';
import { IUser, UserService } from 'src/app/services/user.service';
import { EMAIL_PATTERN } from 'src/app/utils/patterns';
import { ALERT_THEME } from 'src/app/utils/theme';
import Swal from 'sweetalert2';

export interface ILoginInput {
  label: string;
  control: string;
  type: string;
  required: boolean;
  placeholder: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [APPEARD],
})
export class LoginComponent implements OnInit {
  public alertTheme = ALERT_THEME;
  public isLogin: boolean = true;
  public registerForm!: FormGroup;
  public loginForm!: FormGroup;
  public isLoading!: boolean;
  public state = 'ready';
  public user!: IUser;

  constructor(
    private router: Router,
    private userService: UserService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAIL_PATTERN)]),
      password: new FormControl('', Validators.required),
      passwordConfirmation: new FormControl('', Validators.required),
    });
  }

  public goRegister(): void {
    this.isLogin = false;
  }

  public showPassowordDontMatchError(): void {
    Swal.fire({
      title: 'Ops!',
      text: 'Suas senhas não coincidem.',
      icon: 'error',
      background: this.alertTheme.background,
      iconColor: this.alertTheme.iconColor,
      showCancelButton: false,
      confirmButtonColor: this.alertTheme.confirmButtonColor,
      confirmButtonText: 'Tentar novamente',
    });
  }

  public showSuccess(user: IUser): void {
    Swal.fire({
      title: `Parabéns, ${user.name}!`,
      text: `Você efetuou seu cadastro com sucesso.`,
      icon: 'success',
      background: this.alertTheme.background,
      iconColor: this.alertTheme.iconColor,
      showCancelButton: false,
      confirmButtonColor: this.alertTheme.confirmButtonColor,
      confirmButtonText: 'Ok',
    });
  }

  public login() {
    if (this.loginForm.invalid) {
      return;
    }

    const user = this.loginForm.value;
    this.isLoading = true;

    setTimeout(() => {
      this.userService.login(user.email, user.password);
      this.notificationService.notify('Bem-vindo, Matheus!');
      this.router.navigate(['/home']);
      this.isLoading = false;
    }, 1000);
  }

  public goLogin() {
    Swal.fire({
      title: `Você tem certeza que deseja voltar pra página de login?`,
      text: 'Você perderá todos os dados, caso os tenha preenchido.',
      icon: 'warning',
      background: this.alertTheme.background,
      showCancelButton: true,
      confirmButtonColor: this.alertTheme.confirmButtonColor,
      iconColor: this.alertTheme.iconColor,
      cancelButtonColor: this.alertTheme.cancelButtonColor,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/login']);
        this.isLogin = true;
      }
    });
  }

  public register() {
    if (this.registerForm.invalid) { return; }

    const password = this.registerForm.get('password')?.value;
    const passwordConfirmation = this.registerForm.get('passwordConfirmation')?.value;

    if (password !== passwordConfirmation) {
      return this.showPassowordDontMatchError();
    }

    this.user = this.registerForm.value;
    this.isLoading = true;

    setTimeout(() => {
      this.userService.create(this.user);
      this.isLoading = false;
      this.showSuccess(this.user);
      this.isLogin = true;
    }, 1000);
  }
}
