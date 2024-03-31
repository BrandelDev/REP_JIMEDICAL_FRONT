import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './features/shared/navbar/navbar.component';
import { HomeComponent } from './features/views/home/home.component';
import { SkeletonComponent } from './features/layout/skeleton/skeleton.component';
import { NosotrosComponent } from './features/views/nosotros/nosotros.component';
import { ProductosComponent } from './features/views/productos/productos.component';
import { ContactenosComponent } from './features/views/contactenos/contactenos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SkeletonComponent,
    NosotrosComponent,
    ProductosComponent,
    ContactenosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
