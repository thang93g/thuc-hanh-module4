import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateBookComponent } from './create-book/create-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    NavbarComponent,
    CreateBookComponent,
    BookDetailsComponent,
    UpdateBookComponent,
    DeleteBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
