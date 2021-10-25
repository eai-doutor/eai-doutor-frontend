import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { APPEARD } from 'src/app/animations/appeard.animation';
import { WindowService } from 'src/app/services/window.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  animations: [APPEARD],
})
export class LoginFormComponent implements OnInit {
  @Output() register = new EventEmitter();
  @Output() login = new EventEmitter();
  @Input() loginForm!: FormGroup;
  @Input() isLoading!: boolean;

  public subscribeMobile!: Subscription;
  public isMobile!: boolean;
  public state = 'ready';

  constructor(private windowService: WindowService) { this.isMobile = window.innerWidth <= windowService.widthMobile; }

  ngOnInit() {
    this.subscribeMobile = this.windowService.hasMobile.subscribe((hasMobile: boolean) => (this.isMobile = hasMobile));
  }

  goRegister() {
    this.register.emit();
  }

  doLogin() {
    this.login.emit();
  }
}
