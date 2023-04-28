import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { PassengerDashboardComponent } from './passenger-dashboard/passenger-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    // PassengerDashboardComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
