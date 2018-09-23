import { HomepageComponent } from './homepage/homepage.component';
import { ValuesComponent } from './values/values.component';
import { TrainingComponent } from './training/training.component';
import { ReferencesComponent } from './references/references.component';
import { GearComponent } from './gear/gear.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'gear',
    component: GearComponent
  },
  {
    path: 'references',
    component: ReferencesComponent
  },
  {
    path: 'training',
    component: TrainingComponent
  },
  {
    path: 'values',
    component: ValuesComponent
  },
  {
    path: '',
    component: HomepageComponent
  }
];

export const routing = RouterModule.forRoot(routes);
