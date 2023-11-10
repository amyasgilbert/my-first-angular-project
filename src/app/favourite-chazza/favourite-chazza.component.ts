import { Component } from '@angular/core';

@Component({
  selector: 'app-favourite-chazza',
  templateUrl: './favourite-chazza.component.html',
  styleUrls: ['./favourite-chazza.component.css']
})

export class FavouriteChazzaComponent {

  favouriteChazza = '';

  onSelectChazza() {
    // this.favouriteChazza = this.selectedChazza;
  }
}

