import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { BackgroundModule } from './components/background/background.module';
import { FullBranchModule } from './components/full-branch/full-branch.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BackgroundModule,
    FullBranchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
