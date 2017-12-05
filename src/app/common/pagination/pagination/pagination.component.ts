import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Page } from '../entities/page.entity';


interface ActivePage {
  page?: number;
  text?: string;
  active: boolean;
  icon?: string;
}

@Component({
  selector: 'rbo-pagination',
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [ './pagination.component.scss' ]
})
export class PaginationComponent implements OnInit {
  @Input()
  target: string;
  pages: ReadonlyArray<ActivePage>;

  constructor() {
  }

  ngOnInit() {
  }

  @Input()
  set page(page: Page) {
    const first = 1;
    const last = page.totalPages;
    const activePage = page.number;
    this.pages = [
      {
        icon: 'left',
        page: activePage === 1 ? null : activePage,
        active: false
      }
    ];
    let pageNumbers: ReadonlyArray<number> = [];
    for (let i = 1; i <= page.totalPages; i++) {
      if (i === first || i === last || activePage === i
        || last < 5
        || activePage - 1 === i || (activePage < 3 && i < 4)
        || activePage + 1 === i || (activePage > last - 2 && i > last - 3)
      ) {
        pageNumbers = [ ...pageNumbers, i ];
      }
    }

    this.pages = pageNumbers.reduce((result: ReadonlyArray<ActivePage>, nextPageNumber: number) => {
      const lastPage = result[ result.length - 1 ].page;
      if (lastPage && lastPage + 1 < nextPageNumber) {
        result = [
          ...result, {
            text: '...',
            active: false,
          }
        ];
      }
      return [
        ...result, {
          page: nextPageNumber,
          active: activePage === nextPageNumber
        }
      ];
    }, this.pages);

    this.pages = [
      ...this.pages, {
        icon: 'right',
        page: activePage === last ? null : activePage + 2,
        active: false
      }
    ];
  }

}
