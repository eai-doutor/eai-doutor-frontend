import { Component, HostListener, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/animations/appeard.animation';
import { WindowService } from 'src/app/services/window.service';
import { UserService } from 'src/app/services/user.service';
import { ALERT_THEME } from 'src/app/utils/theme';
import { IHeader } from './header.interface';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [APPEARD],
})
export class HeaderComponent implements OnInit {
  @HostListener('window:scroll') onScrollEvent() {
    this.scrolled = true;

    if (window.innerHeight + window.scrollY <= document.body.offsetHeight) {
      this.scrolled = false;
    }
  }

  public subscribeMobile!: Subscription;
  public headerRoutes!: IHeader[];
  public scrolled: boolean = false;
  public alertTheme = ALERT_THEME;
  public isMobile: boolean;
  public state = 'ready';

  constructor(
    private router: Router,
    private userService: UserService,
    private windowService: WindowService
  ) {
    this.isMobile = window.innerWidth <= windowService.widthMobile;
  }

  ngOnInit(): void {
    this.subscribeMobile = this.windowService.hasMobile.subscribe(
      (hasMobile: boolean) => (this.isMobile = hasMobile)
    );
  }

  public logout(): void {
    Swal.fire({
      title: 'Você escolheu sair.',
      text: 'Tem certeza?',
      icon: 'warning',
      background: this.alertTheme.background,
      iconColor: this.alertTheme.iconColor,
      showCancelButton: true,
      confirmButtonColor: this.alertTheme.confirmButtonColor,
      cancelButtonColor: this.alertTheme.cancelButtonColor,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.logout();
        this.router.navigate(['/login']);
      }
    });
  }
}
