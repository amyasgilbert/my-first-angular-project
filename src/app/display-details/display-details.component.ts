import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent {
  secretParagraph = 'ELECTRIC BUTLER';
  showSecret = true;
  log : any = [];

  onToggleOutfit() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1)
    this.log.push(new Date())
  }
}
