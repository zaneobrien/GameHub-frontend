import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './model/user-list/user-list.component';
import { UserFormComponent } from './model/user-form/user-form.component';
import { GameListComponent } from './model/game-list/game-list.component';
 
//Routes URL to component
const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'games', component: GameListComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
