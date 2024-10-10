import { Routes } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { SellerRegisterComponent } from '../seller-register/seller-register.component';
import { SellerLoginComponent } from '../seller-login/seller-login.component';
import { ProductComponent } from '../product/product.component';
import { UserPageComponent } from '../user-page/user-page.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
    {path:'', component: LandingPageComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'sellerlogin', component: SellerLoginComponent},
    {path:'sellerregister', component: SellerRegisterComponent},
    {path:"productDetails", component:ProductComponent},
    {path:"user", component:UserPageComponent},
    {path:'home', component: HomeComponent}
];
