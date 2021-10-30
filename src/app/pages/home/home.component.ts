import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/animations/appeard.animation';
import { ICard } from 'src/app/components/card/card.interface';
import {
  CARD_CONTENT,
  CARD_CONTENT_CAMINHO_ADM,
  CARD_CONTENT_CAMINHO_ADVOGADO,
  CARD_CONTENT_CAMINHO_AJUDA,
  CARD_CONTENT_CAMINHO_BUSCA_POR_ESTADO,
  CARD_CONTENT_CAMINHO_CLIENTE,
  CARD_CONTENT_CAMINHO_CONSULTA_PROCESSUAL,
  CARD_CONTENT_CAMINHO_CONTATOS,
  CARD_CONTENT_CAMINHO_JUSRISPRUDENCIA,
  Target,
} from './home.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [APPEARD],
})
export class HomeComponent implements OnInit {
  public isFirstTime: boolean = true;
  public cardClass: string;
  public content!: ICard[];
  public state = 'ready';

  constructor() { this.cardClass = 'col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3'; }

  ngOnInit() {
    this.content = CARD_CONTENT;
  }

  public setCardContent(target?: Target): void {
    this.isFirstTime = false;

    if (!target) return;

    switch (target) {
      case Target.ADVOGADO:
        this.content = CARD_CONTENT_CAMINHO_ADVOGADO;
        break;

      case Target.CLIENTE:
        this.content = CARD_CONTENT_CAMINHO_CLIENTE;
        break;

      case Target.ADM:
        this.content = CARD_CONTENT_CAMINHO_ADM;
        break;

      case Target.AJUDA:
        this.content = CARD_CONTENT_CAMINHO_AJUDA;
        break;

      case Target.CP:
        this.content = CARD_CONTENT_CAMINHO_CONSULTA_PROCESSUAL;
        break;

      case Target.BE:
        this.content = CARD_CONTENT_CAMINHO_BUSCA_POR_ESTADO;
        break;

      case Target.CONTATOS:
        this.content = CARD_CONTENT_CAMINHO_CONTATOS;
        break;

      case Target.JUSRISPRUDENCIA:
        this.content = CARD_CONTENT_CAMINHO_JUSRISPRUDENCIA;
        break;
    }
  }

  public repeat() {
    this.content = CARD_CONTENT;
    this.isFirstTime = true;
  }
}
