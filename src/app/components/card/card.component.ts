import { Component, Input, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/animations/appeard.animation';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [APPEARD],
})
export class CardComponent implements OnInit {
  public state = 'ready';

  @Input() img?: string;
  @Input() icon?: string;
  @Input() title!: string;
  @Input() size: string = '6rem';
  @Input() width: string = '17rem';
  @Input() height: string = '35rem';
  @Input() outline?: boolean = false;
  @Input() subtitle?: string | number;

  constructor() {}

  ngOnInit(): void {
  }
}
