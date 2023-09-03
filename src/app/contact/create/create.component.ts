import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form! : FormGroup;


  constructor(

    public contactService: ContactService,
    private router: Router ) {}


  /**
   * Form Validation before submission to contact list
   *
   * @return response()
   */
  ngOnInit(): void {
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
    this.contactService.create(this.form.value).subscribe((res:any) => {
         console.log('Contact Created Successfully!');
         this.router.navigateByUrl('contact/index');
    })
  }





}
