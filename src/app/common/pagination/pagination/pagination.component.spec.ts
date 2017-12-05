import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Page } from '../entities/page.entity';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('when 1 page', () => {
    const page: Page = {
      size: 1,
      totalElements: 5,
      totalPages: 1,
      number: 0
    };
    it('should disable the prev and next icon', () => {
      component.page = page;
      expect(component.pages).toEqual([
        {
          page: null,
          active: false,
          icon: 'left',
        },
        {
          page: 1,
          active: true,
        },
        {
          page: null,
          active: false,
          icon: 'right',

        },
      ])

    });
    it('should match the snapshot', () => {
      component.page = {
        ...page,
        number: 0
      };
      fixture.detectChanges();
      expect(fixture).toMatchSnapshot('only-one');
    });
  });
  describe('when 5 pages', () => {
    const page: Page = {
      size: 3,
      totalElements: 5,
      totalPages: 3,
      number: 0
    };

    describe('when on first page', () => {
      it('should disable the prev icon', () => {
        component.page = {
          ...page,
          number: 0
        };
        expect(component.pages).toEqual([
          {
            page: null,
            active: false,
            icon: 'left',
          },
          {
            page: 1,
            active: true,
          },
          {
            page: 2,
            active: false,

          },
          {
            page: 3,
            active: false,

          },
          {
            page: 2,
            active: false,
            icon: 'right',

          },
        ])

      });
      it('should match the snapshot', () => {
        component.page = {
          ...page,
          number: 0
        };
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot('normal-list-first');
      });
    });
    describe('when on last page', () => {

      it('should disable the next icon', () => {
        component.page = {
          ...page,
          number: 2
        };
        expect(component.pages).toEqual([
          {
            page: 2,
            active: false,
            icon: 'left',

          },
          {
            page: 1,
            active: false,

          },
          {
            page: 2,
            active: false,

          },
          {
            page: 3,
            active: true,

          },
          {
            page: null,
            active: false,
            icon: 'right',
          },
        ])

      });
      it('should match the snapshot', () => {
        component.page = {
          ...page,
          number: 2
        };
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot('normal-list-last');
      });
    });
    describe('when on middle page', () => {
      it('should enable the next and prev icon', () => {
        component.page = {
          ...page,
          number: 1
        };
        expect(component.pages).toEqual([
          {
            page: 1,
            active: false,
            icon: 'left'
          },
          {
            page: 1,
            active: false
          },
          {
            page: 2,
            active: true
          },
          {
            page: 3,
            active: false
          },
          {
            page: 3,
            active: false,
            icon: 'right',

          },
        ])

      });
      it('should match the snapshot', () => {
        component.page = {
          ...page,
          number: 1
        };
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot('normal-list-middle');
      });
    });
  });
  describe('when more than 5', () => {
    const page: Page = {
      size: 18,
      totalElements: 5,
      totalPages: 18,
      number: 1
    };
    describe('and the first page is active', () => {
      it('should enable show ... on the 5th position', () => {
        component.page = {
          ...page,
          number: 0
        };
        expect(component.pages).toEqual([
          {
            page: null,
            active: false,
            icon: 'left'
          },
          {
            page: 1,
            active: true
          },
          {
            page: 2,
            active: false
          },
          {
            page: 3,
            active: false
          },
          {
            active: false,
            text: '...'
          },
          {
            page: 18,
            active: false
          },
          {
            page: 2,
            active: false,
            icon: 'right',

          },
        ])

      });
      it('should match the snapshot', () => {
        component.page = {
          ...page,
          number: 0
        };
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot('large-list-first');
      });
    });
    describe('and the second page is active', () => {
      it('should enable show ... on the 5th position', () => {
        component.page = {
          ...page,
          number: 1
        };
        expect(component.pages).toEqual([
          {
            page: 1,
            active: false,
            icon: 'left'
          },
          {
            page: 1,
            active: false
          },
          {
            page: 2,
            active: true
          },
          {
            page: 3,
            active: false
          },
          {
            active: false,
            text: '...'
          },
          {
            page: 18,
            active: false
          },
          {
            page: 3,
            active: false,
            icon: 'right',

          },
        ])

      });
      it('should match the snapshot', () => {
        component.page = {
          ...page,
          number: 1
        };
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot('large-list-second');
      });
    });
    describe('and the third page is active', () => {
      it('should enable show ... on the 5th position', () => {
        component.page = {
          ...page,
          number: 2
        };
        expect(component.pages).toEqual([
          {
            page: 2,
            active: false,
            icon: 'left'
          },
          {
            page: 1,
            active: false
          },
          {
            page: 2,
            active: false
          },
          {
            page: 3,
            active: true
          },
          {
            page: 4,
            active: false
          },
          {
            active: false,
            text: '...'
          },
          {
            page: 18,
            active: false
          },
          {
            page: 4,
            active: false,
            icon: 'right',

          },
        ])

      });
      it('should match the snapshot', () => {
        expect(fixture).toMatchSnapshot('large-list-third');
      });
    });
    describe('and the fourth page is active', () => {
      it('should enable show ... on the 5th position', () => {
        component.page = {
          ...page,
          number: 3
        };
        expect(component.pages).toEqual([
          {
            page: 3,
            active: false,
            icon: 'left'
          },
          {
            page: 1,
            active: false
          },
          {
            active: false,
            text: '...'
          },
          {
            page: 3,
            active: false
          },
          {
            page: 4,
            active: true
          },
          {
            page: 5,
            active: false
          },
          {
            active: false,
            text: '...'
          },
          {
            page: 18,
            active: false
          },
          {
            page: 5,
            active: false,
            icon: 'right',

          },
        ])

      });
      it('should match the snapshot', () => {
        component.page = {
          ...page,
          number: 3
        };
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot('large-list-fourth');
      });
    });
    describe('and the last page is active', () => {
      it('should enable show ... on the 2th position', () => {
        component.page = {
          ...page,
          number: 17
        };
        expect(component.pages).toEqual([
          {
            page: 17,
            active: false,
            icon: 'left'
          },
          {
            page: 1,
            active: false
          },
          {
            active: false,
            text: '...'
          },
          {
            page: 16,
            active: false
          },
          {
            page: 17,
            active: false
          },
          {
            page: 18,
            active: true
          },
          {
            page: null,
            active: false,
            icon: 'right',

          },
        ])

      });
      it('should match the snapshot', () => {
        component.page = {
          ...page,
          number: 17
        };
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot('large-list-last');
      });
    });
    describe('and the last-1 page is active', () => {
      it('should enable show ... on the 2th position', () => {
        component.page = {
          ...page,
          number: 16
        };
        expect(component.pages).toEqual([
          {
            page: 16,
            active: false,
            icon: 'left'
          },
          {
            page: 1,
            active: false
          },
          {
            active: false,
            text: '...'
          },
          {
            page: 16,
            active: false
          },
          {
            page: 17,
            active: true
          },
          {
            page: 18,
            active: false
          },
          {
            page: 18,
            active: false,
            icon: 'right',

          },
        ])

      });
      it('should match the snapshot', () => {
        component.page = {
          ...page,
          number: 16
        };
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot('large-list-last-1');
      });
    });
    describe('and the last-2 page is active', () => {
      it('should enable show ... on the 2th position', () => {
        component.page = {
          ...page,
          number: 15
        };
        expect(component.pages).toEqual([
          {
            page: 15,
            active: false,
            icon: 'left'
          },
          {
            page: 1,
            active: false
          },
          {
            active: false,
            text: '...'
          },
          {
            page: 15,
            active: false
          },
          {
            page: 16,
            active: true
          },
          {
            page: 17,
            active: false
          },
          {
            page: 18,
            active: false
          },
          {
            page: 17,
            active: false,
            icon: 'right',

          },
        ])

      });
      it('should match the snapshot', () => {
        component.page = {
          ...page,
          number: 15
        };
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot('large-list-last-2');
      });
    });
    describe('and the middle page is active', () => {
      it('should enable show ... on the 2th position and 6 th position', () => {
        component.page = {
          ...page,
          number: 14
        };
        expect(component.pages).toEqual([
          {
            page: 14,
            active: false,
            icon: 'left'
          },
          {
            page: 1,
            active: false
          },
          {
            active: false,
            text: '...'
          },
          {
            page: 14,
            active: false
          },
          {
            page: 15,
            active: true
          },
          {
            page: 16,
            active: false
          },
          {
            active: false,
            text: '...'
          },
          {
            page: 18,
            active: false
          },
          {
            page: 16,
            active: false,
            icon: 'right',

          },
        ])

      });
      it('should match the snapshot', () => {
        component.page = {
          ...page,
          number: 14
        };
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot('large-list-middle');
      });
    });
  });

});
