import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { CelebrationComponent } from './celebration/celebration.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { OffersComponent } from './offers/offers.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'accomodation',
    component: AccomodationComponent,
  },
  {
    path: 'celebrations',
    component: CelebrationComponent,
  },
  {
    path: 'food-and-beverage',
    component: FoodAndBeverageComponent,
  },
  {
    path: 'lifestyle',
    component: LifestyleComponent,
  },
  {
    path: 'weddings',
    component: WeddingsComponent,
  },
  {
    path: 'offers',
    component: OffersComponent,
  },
  {
    path: 'signin',
    component: SignInComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
