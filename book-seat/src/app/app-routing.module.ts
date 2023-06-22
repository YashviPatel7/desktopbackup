import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/component/page-not-found/page-not-found.component';
import { AdminHeaderComponent } from './core/component/admin-header/admin-header.component';

const routes: Routes = [
  {
    path: 'bookseat',
    loadChildren: () => import('./bookseat/bookseat.module').then(m => m.BookseatModule)
  },
  {
    path: 'admin',
    component: AdminHeaderComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
