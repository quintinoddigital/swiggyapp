import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabmenuPage } from './tabmenu.page';

const routes: Routes = [
  {
    path: '',
    component: TabmenuPage,
    children: [
      {
        path: '',
        redirectTo: '/tabmenu/principal',
        pathMatch: 'full'
      },
      {
        path: 'principal',
        loadChildren: () => import('../../page/principal/principal.module').then( m => m.PrincipalPageModule)
      },
      {
        path: 'pesquisar',
        loadChildren: () => import('../../page/pesquisar/pesquisar.module').then( m => m.PesquisarPageModule)
      },
      {
        path: 'sacola',
        loadChildren: () => import('../../page/sacola/sacola.module').then( m => m.SacolaPageModule)
      },
      {
        path: 'conta',
        loadChildren: () => import('../../page/conta/conta.module').then( m => m.ContaPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabmenuPageRoutingModule {}
