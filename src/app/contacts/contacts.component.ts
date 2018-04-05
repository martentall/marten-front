import { Component } from '@angular/core';
import {TextRow} from '../console/models/text-row';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  phone: TextRow;
  email: TextRow;
  martenImgPath: string;

  constructor() {
    this.phone = new TextRow('+37258502277');
    this.email = new TextRow('info@marten.software');
    this.martenImgPath = '/assets/img/marten.svg';
  }

}
