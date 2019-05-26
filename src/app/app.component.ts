import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import {
  switchMap,
  concatMap,
  mergeMap,
  exhaustMap,
  debounceTime,
  distinctUntilChanged
} from 'rxjs/operators';
import { Observable, from, of, Subscription, Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {}
  title = 'rxjs-map-demo';
  searchText = new Subject<string>();
  user$: Observable<any>;
  searchStr: string;
  subscription: any;

  ngOnInit() {
    this.user$ = this.searchText.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      mergeMap((term: string) => this.appService.searchUser(term))
    );
  }

  searchUser() {
    this.searchText.next(this.searchStr);
  }
}
