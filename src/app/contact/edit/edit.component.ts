import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  ContactID!: number;
  firstname!: string;
  lastname!: string;
  email!: string;
  company_id!: number;
  contact!: Contact;
  form!: FormGroup;


  constructor(

    public contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router  ) { }

    /**
   * Verify and Validate content before submission
   *
   * @return response()
   */
  ngOnInit(): void {
    this.ContactID = this.route.snapshot.params['ContactId'];
    this.contactService.single(this.ContactID).subscribe((data: Contact)=>{
      this.contact = data;
    });

    this.form = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required]),
      company_id: new FormControl('', Validators.required)
    });
  }


     /**
   * Get form input from form control
   *
   * @return response()
   */
     get f(){
      return this.form.controls;
    }

    /**
     *Execute the create function to submit the form.
     *
     * @return response()
     */
    submit(){
      console.log(this.form.value);
      this.contactService.update(this.ContactID, this.form.value).subscribe((res:any) => {
           console.log('Contact Updated Successfully!');
           this.router.navigateByUrl('contact/index');
      })
    }


}
