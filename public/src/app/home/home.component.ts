import { Component, OnInit } from '@angular/core';
import { WriteServiceService } from '../write-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors: any = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _writeService: WriteServiceService
    ) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors() {
    this._writeService.getAll()
      .subscribe(data => {
        this.authors = data;
      });
  }

  delete(id: String){
    this._writeService.deleteAuthor(id)
      .subscribe(data => {
        console.log("Deleted Author: ", data);
        this.getAuthors();
      });
  }
}
