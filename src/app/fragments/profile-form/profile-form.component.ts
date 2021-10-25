import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { APPEARD } from 'src/app/animations/appeard.animation';
import { Subscription } from 'rxjs';
import { WindowService } from 'src/app/services/window.service';
import { IUser } from 'src/app/services/user.service';

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
  public isMobile!: boolean;
  public state = 'ready';

  constructor(private windowService: WindowService) { }

  ngOnInit() {
    this.subscribeMobile = this.windowService.hasMobile.subscribe((hasMobile: boolean) => (this.isMobile = hasMobile));
  }

  editProfile() {
    this.edit.emit();
  }

  exitProfile() {
    this.exit.emit();
  }

}
