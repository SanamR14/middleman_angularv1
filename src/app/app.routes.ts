import { Routes } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { SellerRegisterComponent } from '../seller-register/seller-register.component';
import { SellerLoginComponent } from '../seller-login/seller-login.component';

export const routes: Routes = [
    {path:'', component: LandingPageComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'sellerlogin', component: SellerLoginComponent},
    {path:'sellerregister', component: SellerRegisterComponent}
];
