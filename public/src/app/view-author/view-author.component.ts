import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { WriteServiceService } from '../write-service.service';

@Component({
  selector: 'app-view-author',
  templateUrl: './view-author.component.html',
  styleUrls: ['./view-author.component.css']
})
export class ViewAuthorComponent implements OnInit {

  id: "";
  anAuthor: any = {
    name: "",
    birthday: "",
    books: []
  }
  book: any = {
    title: "",
  }

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _writeService: WriteServiceService
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log(params['id']);
      this.getAuthor();
    });
  }

  getAuthor(){
    this._writeService.getOne(this.id)
      .subscribe(data => {
        this.anAuthor = data;
        console.log("Got author:", this.anAuthor);
      });
  }

  addBook() {
    this._writeService.writeBook(this.id, this.book)
      .subscribe(data => {
        this.book = data;
        console.log("New book:", this.book);
        this.getAuthor();
      })
      this.book = {title: ""}
  }

  goHome() {
    this._router.navigate(['/']);
  }

  delete(id: String){
    this._writeService.deleteAuthor(id)
      .subscribe(data => {
        console.log("Deleted Author: ", data);
        this.goHome();
      });
  }

}
