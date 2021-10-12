import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/animations/appeard.animation';
import { CARD_CONTENT, IContent } from './home.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [APPEARD],
})
export class HomeComponent implements OnInit {
  public content!: IContent[];
  public state = 'ready';
  
  constructor() {}

  ngOnInit() {
    this.content = CARD_CONTENT;
  }
}
