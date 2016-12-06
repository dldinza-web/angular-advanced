import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

/* App Root */
import
       { AppComponent }       from './app.component';
/*
       { AppComponent }       from './app.component';
*/
import { HighlightDirective } from './highlight.directive';
import { TitleComponent }     from './title.component';
import { UserService }        from './user.service';

/* Contact Imports */
import
       { ContactModule }      from './contact/contact.module';
/*
       { ContactModule }      from './contact/contact.module';
*/

@NgModule({
  imports:      [ BrowserModule, ContactModule ],
  declarations: [ AppComponent, HighlightDirective, TitleComponent ],
  providers:    [ UserService ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
