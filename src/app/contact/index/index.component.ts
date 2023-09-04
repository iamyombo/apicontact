import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


columnDefs = [
    {headerName: 'Make' },
    {headerName: 'Model' },
    {headerName: 'Price'}
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];

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
   * soft deletion based on selected contact id. with the method "deleteContact"
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
