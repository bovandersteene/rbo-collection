import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from '../entity/search-response.entity';
import { Observable } from 'rxjs/Observable';
import { Search } from '../entity/search.enity';
import { environment } from '../../../environments/environment';

const searchQuery = 'https://api.themoviedb.org/3/search/movie';

@Injectable()
export class SearchService {

  constructor(private httpClient: HttpClient) {
  }

  searchForMovie(name: string, page: number = 1): Observable<Search> {
    return this.httpClient.get<SearchResult>(`${searchQuery}`, {
      params: {
        query: name,
        page: `${page}`,
        api_key: environment.api_key
      }
    })
      .map(result => ({
        movies: result.results,
        page: {
          size: result.results.length,
          totalElements: result.total_results,
          totalPages: result.total_pages,
          number: result.page
        }
      }));
  }
}
