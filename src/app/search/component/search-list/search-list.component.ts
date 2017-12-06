import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../entity/search-response.entity';
import { Page } from '../../entity/entities/page.entity';

@Component({
  selector: 'rbo-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  @Input()
  movies: Array<Movie>;

  constructor() { }

  ngOnInit() {
  }

}
