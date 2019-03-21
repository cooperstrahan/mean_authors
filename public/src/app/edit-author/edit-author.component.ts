import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { WriteServiceService } from '../write-service.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {

  id = "";

  anAuthor: any = {
    name: "",
    birthday: Date
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
      this.getAuthor(this.id);
    });
  }
  
  getAuthor(id: String){
    this._writeService.getOne(this.id)
      .subscribe(data => {
        this.anAuthor = data;
        console.log("Got author:", data);
      });
  }

  editAuthor(id:String){
    this._writeService.editAuthor(id, this.anAuthor)
      .subscribe(data => {
        console.log(this.anAuthor);
        this.goHome();
      });
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
