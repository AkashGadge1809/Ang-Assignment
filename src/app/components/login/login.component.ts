import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../SERVICES/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected property name
})
export class LoginComponent {

  
  Userdata :any []=[]
  myForm: FormGroup;

  constructor(private router: Router,private fb: FormBuilder, private user :UserService) {
    this.myForm =this.fb.group({
      username:['', [Validators.required]],
    password:['',[Validators.required]],
    role:['',[Validators.required]]
    });
  }

  onLogin() {

    this.user.getuser().subscribe((res)=>
    {
      this.Userdata= res
    })

    const username = this.myForm.get('username')?.value;
    const password = this.myForm.get('password')?.value;
    const role = this.myForm.get('role')?.value;

    const user = this.Userdata.find(u => u.uname == username);
    if(user && user.password == password)
    {
      if(user.role=='user'){
      this.user.setuserdata(user);
      this.user.Login()
      this.router.navigate(['/home'])
      console.log(user)
    }
    else if(user.role=='admin')
    {
      this.router.navigate(['/product'],{queryParams:user})
      console.log(user)

    }
    }

    
    // const username = this.myForm.get('username')?.value;
    // const password = this.myForm.get('password')?.value;
    // const role = this.myForm.get('role')?.value;

    // if (username === 'user' && password === '111') {
    //   if (role === 'user') {
    //     this.router.navigate(['/home']);
    //   } else {
    //     alert('check your role');
    //   }
    // } else {
    //   alert('Invalid credentials');
    // }

  }

  // navigateToHome() {
    
  //     this.router.navigate(['/home']);
  //     }
}
