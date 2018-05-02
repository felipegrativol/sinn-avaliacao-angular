import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { MainComponent } from './core/main/main.component';
import { ClubesComponent } from './clubes/clubes.component';



export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: {
      title: 'Início',
      icon: 'dashboard',
      active: false
    }
  },
  {
    path: 'clubes',
    component: ClubesComponent,
    data: {
      title: 'Clubes',
      icon: 'dashboard',
      active: true
    },

  },
  {
    path: '404',
    component: PageNotFoundComponent,
    data: {
      acitve: false
    }

  },
  {
    path: '**', component: PageNotFoundComponent,
    data: {
      acitve: false
    }
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
