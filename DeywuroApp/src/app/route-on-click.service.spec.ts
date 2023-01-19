import { TestBed } from '@angular/core/testing';

import { RouteOnClickService } from './route-on-click.service';

describe('RouteOnClickService', () => {
  let service: RouteOnClickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteOnClickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
