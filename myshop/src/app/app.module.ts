import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ProductsComponent } from './components/products/products.component';
import { PanelTopComponent } from './components/panel-top/panel-top.component';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { MenuComponent } from './components/admin/menu/menu.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';

const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/products', component: AdminProductsComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProductsComponent,
    PanelTopComponent,
    CartComponent,
    DashboardComponent,
    MenuComponent,
    AdminProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
