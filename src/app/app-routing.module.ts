import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBrandsComponent } from './components/brands/all-brands/all-brands.component';
import { BrandComponent } from './components/brands/brand/brand.component';
import { HomeComponent } from './components/security/home/home.component';
import { LoginErrorComponent } from './components/security/login-error/login-error.component';
import { LoginComponent } from './components/security/login/login.component';
import { LogoutComponent } from './components/security/logout/logout.component';
import { RouteGuardService } from './services/security/route-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home/:user', component: HomeComponent, canActivate:[RouteGuardService]},
  { path: 'login-error', component: LoginErrorComponent, canActivate:[RouteGuardService]},
  { path: 'all-brands', component: AllBrandsComponent, canActivate:[RouteGuardService]},
  { path: 'brand/:brandId', component: BrandComponent, canActivate:[RouteGuardService]},
  { path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
