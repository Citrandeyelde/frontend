import { Routes } from '@angular/router';
import { VerficarplacaComponent } from './main/verficarplaca/verficarplaca.component';
import { ElegirseguroComponent } from './main/elegirseguro/elegirseguro.component';
import { CheckoutComponent } from './main/checkout/checkout.component';

export const routes: Routes = [{
   path:'', component: VerficarplacaComponent
},{
    path:'comprar', component:ElegirseguroComponent
},
{   path:'carrito', component:CheckoutComponent
}];
