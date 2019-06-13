import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserService } from './service/user.service';
import { GameService } from './service/game.service';
import { UserListComponent } from './model/user-list/user-list.component';
import { UserFormComponent } from './model/user-form/user-form.component';
import { GameListComponent } from './model/game-list/game-list.component';
import { GameCheckoutComponent } from './model/game-checkout/game-checkout.component';
import { GameDetailComponent } from './model/game-detail/game-detail.component';
import { ModalDialogModule } from 'ngx-modal-dialog';
 
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    GameListComponent,
    GameCheckoutComponent,
	GameDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
	FormsModule,
	ModalDialogModule.forRoot()
  ],
  providers: [UserService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }