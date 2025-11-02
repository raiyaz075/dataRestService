import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksService } from '../books/service/books-service';
import { AuthorEntity } from '../books/model/bookEntity';
@Component({
  selector: 'app-author',
  standalone: true,    
  imports: [FormsModule],
  templateUrl: './author.html',
  styleUrl: './author.css'
})
export class Author {
  private svc = inject(BooksService); 
  authorId = '';
  loading = false;
  error = '';
  author: AuthorEntity | null = null;

  onSubmit() {
    this.error = '';
    this.author = null;

    const trimmed = this.authorId.trim();
    if (!trimmed) return;
    const id = Number(trimmed);
    if (Number.isNaN(id)) { this.error = 'Please enter a numeric id.'; return; }

    this.loading = true;
    this.svc.getAuthorById(id).subscribe({
      next: (data: AuthorEntity) => {     
        this.author = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Author not found.';
        this.loading = false;
      }
    });
  }

}
