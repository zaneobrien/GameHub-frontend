import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../game';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/service/game.service';
import { Status } from '../status';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  @Input() public game = new Game();

  @Input() public Status = Status;

  @Input() public showBtn = false;

  constructor(private route: ActivatedRoute, private gameService: GameService) {
   }

  public show(): void {
    console.log('status = ' + this.game.status);
    if ('AVAILABLE' === this.game.status) {
        this.showBtn = true;
    }
    console.log('showBtn = ' + this.showBtn);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.gameService.findById(params.gameId).subscribe(data => { this.game = data; this.show(); });
    });
  }

}
