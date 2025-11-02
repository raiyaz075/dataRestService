import { Routes } from '@angular/router';
import {Home} from "./home/home";
import {About} from "./about/about";
import {Contact} from "./contact/contact";
import {Books} from "./books/books";
import {Book} from "./books/book/book";
import {Login} from "./login/login";
import {Admin} from "./admin/admin";
import { Author } from './author/author';
import {loggedInGuard} from "./logged-in.guard";

const booksRoutes: Routes = [
  {path: ':id', component: Book}
];

export const routes: Routes = [
  {path: 'home', component: Home},
  { path: 'author', component: Author },
  {path: 'about', component: About},
  {path: 'contact', component: Contact},
  { path: 'login', component: Login },
  {
    path: 'admin',
    component: Admin,
    canActivate: [ loggedInGuard ]
  },
  {path: 'books', component: Books,
    children: booksRoutes
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: Home}
];
