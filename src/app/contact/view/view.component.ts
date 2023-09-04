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

  id!: number;
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
    this.id = this.route.snapshot.params['contactId'];

    //console.log(this.id );

    this.contactService.single(this.id).subscribe((data: Contact)=>{

       this.contact = data;

       console.log(this.contact = data );
    });
  }


}
