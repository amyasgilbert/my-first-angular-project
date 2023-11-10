import { Component } from '@angular/core';
import {timestamp} from "rxjs";

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent {
  username = '';
}
