import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/blockchain.reducer';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [
    AppComponent,
    BlockchainComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({blockchain: reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
