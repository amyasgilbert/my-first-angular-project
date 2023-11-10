import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {WonkyComponent} from "./wonky/wonky.component";
import {MultiWonkComponent} from './multi-wonk/multi-wonk.component';
import {NavbarComponent} from './navbar/navbar.component';
import { FavouriteChazzaComponent } from './favourite-chazza/favourite-chazza.component';
import { UsernameComponent } from './username/username.component';

@NgModule({
    declarations: [
        AppComponent,
        WonkyComponent,
        MultiWonkComponent,
        NavbarComponent,
        FavouriteChazzaComponent,
        UsernameComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
