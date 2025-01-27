import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../SERVICES/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  regisForm: FormGroup;

  constructor(private fb: FormBuilder, private router:Router, private user : UserService) {
    this.regisForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      uname: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      role:['',[Validators.required]]

    })
  }
  
  saveUser() {
    if(this.regisForm.valid){

      const data= this.regisForm.value
      this.user.saveuser(data).subscribe((res)=>
      {
        alert("Registered Successfully!!!")
      })

      console.log('form Submitted',this.regisForm.value)
     
      this.router.navigate(['/login'])
    }
    else{
      alert('Enter All Details')
    }
  }
}
