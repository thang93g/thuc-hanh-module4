import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  id!: number;
  book!: any;

  constructor(private router: Router,private route: ActivatedRoute,private groupService: BookService) { }

  ngOnInit() {
    this.book = new Book();

    this.id = this.route.snapshot.params['id'];

    this.groupService.getBook(this.id).subscribe(data => {
        this.book = data;
      }, error => console.log(error));
  }

  updateBook() {
    this.groupService.updateBook(this.id, this.book)
      .subscribe(data => {
        console.log(data);
        this.book = new Book();
        this.gotoList();
      }, error => console.log(error));
  }

  gotoList(){
    this.router.navigate(['/books']);
  }

  onSubmit(){
    this.updateBook();
  }

}
