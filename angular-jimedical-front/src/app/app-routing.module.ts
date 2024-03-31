import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './features/layout/skeleton/skeleton.component';
import { HomeComponent } from './features/views/home/home.component';
import { NosotrosComponent } from './features/views/nosotros/nosotros.component';
import { ProductosComponent } from './features/views/productos/productos.component';
import { ContactenosComponent } from './features/views/contactenos/contactenos.component';

const routes: Routes = [
  {
    path: '', component: SkeletonComponent,
    children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: 'Nosotros', component: NosotrosComponent
      },
      {
        path: 'Productos', component: ProductosComponent
      },
      {
        path:'Contáctenos', component:ContactenosComponent
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
