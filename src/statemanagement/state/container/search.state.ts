
import { Movie } from '../../../app/search/entity/search-response.entity';
import { Page } from '../../../app/search/entity/entities/page.entity';

export type SearchState = Readonly<{
  page: Page;
  movies: Array<Movie>;
}>;

