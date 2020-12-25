import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book: Book = new Book();
  submitted = false;

  constructor(private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
  }

  newEmployee(): void {
    this.submitted = false;
    this.book = new Book();
  }

  save() {
    this.bookService
      .createBook(this.book).subscribe((data: any) => {
        this.book = new Book();
        this.gotoList();
      },
        (error: any) => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/books']);
  }
}
