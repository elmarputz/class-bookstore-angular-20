import { Component } from '@angular/core';
import { Book } from './shared/book';

@Component({
  selector: 'bs-root',
  template: '<bs-book-list *ngIf="listOn" (showDetailsEvent)="showDetails($event)"></bs-book-list><bs-book-details (showListEvent)="showList()" *ngIf="detailsOn" [book]="book"></bs-book-details>',
  styles: []
})

export class AppComponent {
  title = 'bookstore20';

  listOn = true;
  detailsOn = false;
  book : Book;

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(book: Book) {
    this.book = book;
    this.listOn = false;
    this.detailsOn = true;
  }

}
