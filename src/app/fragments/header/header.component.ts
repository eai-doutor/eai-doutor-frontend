import { Component, OnInit } from '@angular/core';
import { IHeader } from './header.interface';
import { APPEARD } from 'src/app/animations/appeard.animation';
import { WindowService } from 'src/app/services/window.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [APPEARD],
})
export class HeaderComponent implements OnInit {
  public subscribeMobile!: Subscription;
  public headerRoutes!: IHeader[];
  public isMobile: boolean;
  public state = 'ready';

  constructor(private windowService: WindowService) {
    this.isMobile = window.innerWidth <= windowService.widthMobile;
  }

  ngOnInit(): void {
    this.subscribeMobile = this.windowService.hasMobile.subscribe((hasMobile: boolean) => (this.isMobile = hasMobile));
  }
}
