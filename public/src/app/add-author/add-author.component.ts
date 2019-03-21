import { Component, OnInit } from '@angular/core';
import { WriteServiceService } from '../write-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  newAuthor: any = {
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
      console.log(params['id']);
    });
  }

  createAuthor() {
    console.log(this.newAuthor);
    this._writeService.addAuthor(this.newAuthor)
      .subscribe(data => {
        console.log("Created new author", data);
        this.newAuthor = {name: "", birthday: ""}
        this.goHome();
      });
  }
  goHome() {
    this._router.navigate(['/']);
  }

}
