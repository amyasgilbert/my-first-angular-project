import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {WonkyComponent} from "./wonky/wonky.component";
import { MultiWonkComponent } from './multi-wonk/multi-wonk.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        WonkyComponent,
        MultiWonkComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
