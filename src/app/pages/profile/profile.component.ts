import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser, UserService } from 'src/app/services/user.service';
import { EMAIL_PATTERN } from 'src/app/utils/patterns';
import { ALERT_THEME } from 'src/app/utils/theme';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public alertTheme = ALERT_THEME;
  public profileForm!: FormGroup;
  public isLoading!: boolean;
  public profile!: IUser;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.profileForm = new FormGroup({
      name: new FormControl('', Validators.required),
      image: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAIL_PATTERN)]),
      password: new FormControl('', Validators.required),
    });

    this.getUser();
  }

  showSuccess(profile: IUser): void {
    Swal.fire({
      title: 'Sucesso!',
      text: `${profile.name}, você editou suas informações pessoais.`,
      icon: 'success',
      background: this.alertTheme.background,
      iconColor: this.alertTheme.iconColor,
      showCancelButton: false,
      confirmButtonColor: this.alertTheme.confirmButtonColor,
      confirmButtonText: 'Ok',
    });
  }

  public showError(error: any): void {
    Swal.fire({
      title: `Ops!`,
      text: error ? error : 'Ocorreu um erro.',
      icon: 'error',
      background: this.alertTheme.background,
      iconColor: this.alertTheme.iconColor,
      showCancelButton: false,
      confirmButtonColor: this.alertTheme.confirmButtonColor,
      confirmButtonText: 'Ok',
    });
  }

  setProfileForm(): void {
    this.profileForm.patchValue({
      name: this.profile?.name,
      email: this.profile?.email,
    });
  }

  getUser(): void {
    this.profile = this.userService.getUser();
    this.setProfileForm();
  }

  exitProfile(): void {
    this.router.navigate(['/home']);
  }

  editProfile(): void {
    if (this.profileForm.invalid) { return; }

    const profile = this.profileForm.value;
    const userId = this.userService.getUser().customerId;
    this.isLoading = true;

    if (profile && userId) {
      this.userService.edit(profile, userId).subscribe(
        (client) => this.showSuccess(client),
        (response) => {
          this.isLoading = false;
          this.showError(response.error.error);
        },
        () => {
          this.userService.get(userId).subscribe((client) => {
            this.userService.setUser(client);
            this.profile = this.userService.getUser();
            this.isLoading = false;
          });
        }
      );
    }
  }
}
