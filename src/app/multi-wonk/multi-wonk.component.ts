import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-wonk',
  templateUrl: './multi-wonk.component.html',
  styleUrls: ['./multi-wonk.component.css']
})
export class MultiWonkComponent {

  allowNewWonk = false;
  wonkCreationStatus = 'Not wonky yet';
  wonkbotName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewWonk = true;
    },2000)
  }

  ngOnInit() {
  }

  onCreateWonk() {
    this.wonkCreationStatus = 'Wonky!!'
  }

  onUpdateWonkbotName(event : any) {
    this.wonkbotName = (<HTMLInputElement>event.target).value;
  }

}
