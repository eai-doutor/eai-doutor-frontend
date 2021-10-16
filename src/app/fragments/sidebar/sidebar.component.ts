import { Component, HostListener, OnInit } from '@angular/core';
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
  @HostListener('window:scroll') onScrollEvent() {
    this.scrolled = true;

    if ((window.innerHeight + window.scrollY) <= document.body.offsetHeight) {
      this.scrolled = false;
    }
  }

  public subscribeMobile!: Subscription;
  public scrolled: boolean = false;
  public isMobile: boolean;
  public state = 'ready';

  constructor(private windowService: WindowService) {
    this.isMobile = window.innerWidth <= windowService.widthMobile;
  }

  ngOnInit(): void {
    this.subscribeMobile = this.windowService.hasMobile.subscribe(
      (hasMobile: boolean) => (this.isMobile = hasMobile)
    );
  }
}
