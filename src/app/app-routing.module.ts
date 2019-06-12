import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './model/user-list/user-list.component';
import { UserFormComponent } from './model/user-form/user-form.component';
import { GameListComponent } from './model/game-list/game-list.component';
import { GameCheckoutComponent } from './model/game-checkout/game-checkout.component';
import { GameDetailComponent } from './model/game-detail/game-detail.component';

//Routes URL to component
const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'games', component: GameListComponent },
  { path: 'checkout', component: GameCheckoutComponent },
  { path: 'detail/:gameId', component: GameDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
