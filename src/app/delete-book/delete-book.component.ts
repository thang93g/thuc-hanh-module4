import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css'],
})
export class DeleteBookComponent implements OnInit {
  id!: number;
  book!: any;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.book = new Book();
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBook(this.id).subscribe(
      (data) => {
        this.book = data;
        console.log(this.book);
      },
      (error) => console.log(error)
    );
  }

  gotoList(){
    this.router.navigate(['books']);
  }

  deleteBook(){
    this.bookService.deleteBook(this.id).subscribe(
      data => { this.gotoList(); }
    )
  }
}
