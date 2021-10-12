import { Component, OnInit } from '@angular/core';
import { FOOTER_CONTENT } from './footer.content';
import { IFooter } from './footer.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public get content(): IFooter {
    return FOOTER_CONTENT;
  }
}
