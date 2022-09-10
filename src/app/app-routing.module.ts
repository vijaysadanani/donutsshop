import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { DonutdetailComponent } from './components/donutdetail/donutdetail.component';
import { DonuthomeComponent } from './components/donuthome/donuthome.component';

const routes: Routes = [
  {path: 'donutHome', component: DonuthomeComponent},
  {path: 'donutDetail/:id', component: DonutdetailComponent},
  {path: 'cart', component: CartComponent},
  {path: '', redirectTo:'/donutHome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
