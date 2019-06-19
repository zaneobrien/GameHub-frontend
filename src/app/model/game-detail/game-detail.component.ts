import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { Game } from '../game';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/service/game.service';
import { Status } from '../status';
import { ModalDialogService } from 'ngx-modal-dialog';
import { GameCheckoutComponent } from '../game-checkout/game-checkout.component';
import { HistoryService } from 'src/app/service/history.service';
import { History } from '../history';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  @Input() public game = new Game();

  @Input() public history: History[] = new Array();

  @Input() public showBtn = false;

  constructor(private route: ActivatedRoute,
			  private gameService: GameService,
			  private historyService: HistoryService,
              private modalService: ModalDialogService,
	          private viewRef: ViewContainerRef) {}

  public show(): void {
    if (Status.AVAILABLE === this.game.status) {
        this.showBtn = true;
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.gameService.findById(params.gameId).subscribe(data => { this.game = data; this.show(); });
       this.historyService.findByGameId(params.gameId).subscribe(data => this.history = data as unknown as History[]);
	});
	
  }

  openNewDialog() {
    this.modalService.openDialog(this.viewRef, { title: 'Game Checkout', childComponent: GameCheckoutComponent, data: this.game });
  }

}
