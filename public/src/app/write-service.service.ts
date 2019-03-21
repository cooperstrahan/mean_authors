import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WriteServiceService {
  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get('/authors');
  }

  getOne(id: String) {
    return this._http.get('/authors/'+id);
  }
  
  addAuthor(newAuthor) {
    return this._http.post('/authors', newAuthor);
  }

  editAuthor(id: String, anAuthor) {
    return this._http.put('/authors/'+id, anAuthor);
  }

  writeBook(id: String, book) {
    return this._http.put('/books/'+id, book);
  }

  voteOnBook(id: String, book) {
    return this._http.put('/book/'+id, book);
  }

  deleteAuthor(id: String) {
    return this._http.delete('/authors/'+id);
  }

  deleteABook(id: String, index) {
    return this._http.put('/abooks/'+id, index);
  }
}
