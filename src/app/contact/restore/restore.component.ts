import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-restore',
  templateUrl: './restore.component.html',
  styleUrls: ['./restore.component.css']
})
export class RestoreComponent implements OnInit {

  contacts: Contact[] =[];


  constructor(public contactService: ContactService) {}

  /**
   * Get List of deleted contacts
   *
   * @return response()
   */
  ngOnInit(): void {
    this.contactService.checkBin().subscribe((data: Contact[])=>{
      this.contacts = data;
      console.log(this.contacts);
    })
  }

   /**
   * soft deletion based on selected contact id. with the method "deleteContact"
   *
   * @return response()
   */
  restoreContact(id:number){
    this.contactService.undodel(id).subscribe(res => {
         this.contacts = this.contacts.filter(item => item.ContactID !== id);
         console.log('Post Restored successfully!');

    })
  }




}
