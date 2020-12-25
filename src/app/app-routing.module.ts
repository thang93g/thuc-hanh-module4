import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  {path: 'books',component: BookListComponent},
  {path: 'books/details/:id',component:BookDetailsComponent},
  {path: 'books/update/:id',component:UpdateBookComponent},
  {path: 'books/delete/:id',component:DeleteBookComponent},
  {path: 'books/add',component: CreateBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
