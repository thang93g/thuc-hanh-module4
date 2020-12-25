import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books!: any;
  constructor(private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.books = this.bookService.getBookList();
  }

  bookDetails(id: number){
    this.router.navigate(['books', id]);
  }

}
