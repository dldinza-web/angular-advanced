import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { Contact, ContactService } from './contact.service';

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css']
})

export class ContactComponent implements OnInit {
  contact: Contact;
  contacts: Contact[];

  userName = '';
  msg = 'Loading contacts...';

  constructor(
    private userService: UserService,
    private contactService: ContactService
  ) {
    this.userName = userService.userName;
  }

  ngOnInit() {
    this.contactService.getContacts().then(contacts => {
      this.msg = '';
      this.contacts = contacts;
      this.contact = contacts[0];
    });
  }

  onSubmit() {
    this.displayMessage('Saved ' + this.contact.name);
  }

  displayMessage(msg: string) {
    this.msg = msg;
    setTimeout(() => { this.msg = ''; }, 1500);
  }

  next() {
    let ix = 1 + this.contacts.indexOf(this.contact);
    if (ix == this.contacts.length) { ix = 0 }
    this.contact = this.contacts[ix];
  }

  newContact() {
    this.displayMessage("New contact");
    this.contact = { id: 42, name: '' };
    this.contacts.push(this.contact);
  }
}
