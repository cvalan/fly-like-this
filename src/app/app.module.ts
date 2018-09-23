import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.router';
import { AppComponent } from './app.component';
import { NavigatonComponent } from './navigaton/navigaton.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReferencesComponent } from './references/references.component';
import { ValuesComponent } from './values/values.component';
import { TrainingComponent } from './training/training.component';
import { GearComponent } from './gear/gear.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatonComponent,
    FooterComponent,
    HomepageComponent,
    AboutComponent,
    ContactComponent,
    ReferencesComponent,
    ValuesComponent,
    TrainingComponent,
    GearComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
