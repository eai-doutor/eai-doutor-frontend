import { Component, OnInit } from '@angular/core';
import { WindowService } from 'src/app/services/window.service';
import { Subscription } from 'rxjs';
import { APPEARD } from 'src/app/animations/appeard.animation';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [APPEARD],
})
export class SidebarComponent implements OnInit {
  public subscribeMobile!: Subscription;
  public isMobile: boolean;
  public state = 'ready';

  constructor(private windowService: WindowService) {
    this.isMobile = window.innerWidth <= windowService.widthMobile;
  }

  ngOnInit(): void {
    this.subscribeMobile = this.windowService.hasMobile.subscribe((hasMobile: boolean) => (this.isMobile = hasMobile));
  }
}
