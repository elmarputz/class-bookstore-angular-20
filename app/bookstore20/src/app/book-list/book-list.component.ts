import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Book, Image, Author} from '../shared/book';
import {BookStoreService} from '../shared/book-store.service';

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {

  constructor(private bs: BookStoreService) { }

  books: Book[];

  ngOnInit() {
    this.books = this.bs.getAll();
  }


}
