import { Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UnavbarComponent } from './USER/unavbar/unavbar.component';

export const routes: Routes = [

    {
        path:"login", component:LoginComponent
    },

    { 
        path: '', redirectTo: '/login',pathMatch:"full"
    },

    {
        path:"user", component:UnavbarComponent, children:[

          
        ]
    }
];
