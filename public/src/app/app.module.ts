import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewAuthorComponent } from './view-author/view-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { WriteServiceService } from './write-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewAuthorComponent,
    EditAuthorComponent,
    AddAuthorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WriteServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
