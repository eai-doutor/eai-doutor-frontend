import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { APPEARD } from 'src/app/animations/appeard.animation';
import { Subscription } from 'rxjs';
import { WindowService } from 'src/app/services/window.service';
import { IUser } from 'src/app/services/user.service';
import { ALERT_THEME } from 'src/app/utils/theme';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
  animations: [APPEARD],
})
export class ProfileFormComponent implements OnInit {
  @Output() edit = new EventEmitter();
  @Output() exit = new EventEmitter();
  @Input() profileForm!: FormGroup;
  @Input() isLoading!: boolean;
  @Input() profile!: IUser;
  
  public subscribeMobile!: Subscription;
  public sameValue: boolean = false;
  public alertTheme = ALERT_THEME;
  public isMobile!: boolean;
  public state = 'ready';

  constructor(private windowService: WindowService) { }

  ngOnInit() {
    this.subscribeMobile = this.windowService.hasMobile.subscribe((hasMobile: boolean) => (this.isMobile = hasMobile));
    this.profileForm.valueChanges.subscribe(() => this.validateIsEqual());
    this.validateIsEqual();
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

  validateIsEqual(): void {
    this.sameValue = this.profile?.name === this.profileForm?.value.name;
  }

  editProfile() {
    this.validateIsEqual();
    
    if (!this.sameValue) {
      return this.edit.emit();
    }

    this.showError('Não há alterações para serem salvas.');
  }

  exitProfile() {
    this.exit.emit();
  }
}
