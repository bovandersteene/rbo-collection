import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchModule } from './search/search.module';

const routes: Routes = [
  {
    path: 'search',
    loadChildren: () => SearchModule,
  },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
