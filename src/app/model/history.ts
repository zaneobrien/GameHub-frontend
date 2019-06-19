import { User } from './user';
import { Game } from './game';
import { Action } from './action';

export class History {
	historyId: number;
	action: Action;
	user: User;
	game: Game;
	timestamp: Date;
}