import { Component } from "@angular/core";

@Component({
    selector: 'app-wonky',
    templateUrl: './wonky.component.html'
})
export class WonkyComponent {
    wonkState = '~~~super wonky~~~';
    wonkTime = 1;

    getWonkState () {
        return this.wonkState;
    }
}