import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { APPEARD } from 'src/app/animations/appeard.animation';
import { WindowService } from 'src/app/services/window.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  animations: [APPEARD],
})
export class RegisterFormComponent implements OnInit {
  @Output() register = new EventEmitter();
  @Output() login = new EventEmitter();
  @Input() registerForm!: FormGroup;
  @Input() isLoading!: boolean;
  
  public subscribeMobile!: Subscription;
  public isMobile!: boolean;
  public state = 'ready';

  constructor(private windowService: WindowService) { this.isMobile = window.innerWidth <= windowService.widthMobile; }

  ngOnInit() {
    this.subscribeMobile = this.windowService.hasMobile.subscribe((hasMobile: boolean) => (this.isMobile = hasMobile));
  }

  goLogin() {
    this.login.emit();
  }

  doRegister() {
    this.register.emit();
  }
}
