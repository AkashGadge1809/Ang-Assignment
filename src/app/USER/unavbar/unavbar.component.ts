import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../SERVICES/user.service';

@Component({
  selector: 'app-unavbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './unavbar.component.html',
  styleUrl: './unavbar.component.css'
})
export class UnavbarComponent {

  constructor(private router : Router, private user : UserService){

  }
  logout(){

    this.user.Logout();
    this.router.navigate(['/login'])

  }

}
