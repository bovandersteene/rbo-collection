import { Page } from './entities/page.entity';
import { Movie } from './search-response.entity';

export interface Search {
  page: Page;
  movies: Array<Movie>;
}