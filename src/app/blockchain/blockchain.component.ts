import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import * as BlockchainActions from '../actions/blockchain.actions'
@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }


  addCoin(name, price) {
    this.store.dispatch(new BlockchainActions.AddCoin(({name: name, price: price}) ) );
  }
}
