import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  contacts: Contact[] =[];

  constructor(public contactService: ContactService) {}

  /**
   * Get List of contact on page load.
   *
   * @return response()
   */
  ngOnInit(): void {
    this.contactService.getAll().subscribe((data: Contact[])=>{
      this.contacts = data;
      console.log(this.contacts);
    })
  }

   /**
   * Iniciating soft deletion based on selected contact id. with the method "deleteContact"
   *
   * @return response()
   */
  deleteContact(id:number){
    this.contactService.softdel(id).subscribe(res => {
         this.contacts = this.contacts.filter(item => item.ContactID !== id);
         console.log('Post deleted successfully!');
    })
  }




}
