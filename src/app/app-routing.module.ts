import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {UserCreateComponent} from './user-create/user-create.component';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'infostabac', loadChildren: './infostabac/infostabac.module#InfostabacPageModule' },
  { path: 'tabac', loadChildren: './tabac/tabac.module#TabacPageModule' },
    { path: 'create', component: UserCreateComponent},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
