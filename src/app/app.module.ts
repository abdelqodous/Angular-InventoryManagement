import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/security/login/login.component';
import { HomeComponent } from './components/security/home/home.component';
import { LoginErrorComponent } from './components/security/login-error/login-error.component';
import { AllBrandsComponent } from './components/brands/all-brands/all-brands.component';
import { MenuComponent } from './components/system/menu/menu.component';
import { FooterComponent } from './components/system/footer/footer.component';
import { LogoutComponent } from './components/security/logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { BrandComponent } from './components/brands/brand/brand.component';
import { RelativeDatePipePipe } from './pipes/inventory/relative-date-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LoginErrorComponent,
    AllBrandsComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    BrandComponent,
    RelativeDatePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
