import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/animations/appeard.animation';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  animations: [APPEARD],
})
export class InfoComponent implements OnInit {
  public state = 'ready';
  
  constructor() { }

  ngOnInit() {
  }

}
