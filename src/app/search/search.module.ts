import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchContainerComponent } from './container/search-container/search-container.component';
import { MatAutocompleteModule, MatCard, MatCardModule, MatIconModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from './service/search.service';
import { SearchSandboxService } from './sandbox/search-sandbox.service';
import { SearchListComponent } from './component/search-list/search-list.component';
import { PaginationModule } from '../common/pagination/pagination.module';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    PaginationModule,
    MatCardModule,
  ],
  declarations: [ SearchContainerComponent, SearchListComponent ],
  providers: [ SearchService , SearchSandboxService]
})
export class SearchModule {
}
