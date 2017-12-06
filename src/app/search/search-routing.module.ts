import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchContainerComponent } from './container/search-container/search-container.component';

const routes: Routes = [
  {
    path: ':page',
    component: SearchContainerComponent,
  },
  {
    path: '',
    redirectTo: '/search/1', //This will make sure that we are always redirected to the first page
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SearchRoutingModule {
}
