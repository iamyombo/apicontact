import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  ContactID!: number;
  contact!: Contact;


  constructor(

    public contactService: ContactService,
    private route: ActivatedRoute,
    //private route: Router
     ) {}

    /**
   * Get all contact list
   *
   * @return response()
   */

 ngOnInit(): void {
    this.ContactID = this.route.snapshot.params['id'];

    this.contactService.single(this.ContactID).subscribe((data: Contact)=>{
      this.contact = data;
    });
  }


}
