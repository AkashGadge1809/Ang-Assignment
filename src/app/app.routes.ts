import { Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UnavbarComponent } from './USER/unavbar/unavbar.component';
import { AboutUsComponent } from './USER/about-us/about-us.component';
import { HomeComponent } from './USER/home/home.component';
import { ContactUsComponent } from './USER/contact-us/contact-us.component';
import { ProductsComponent } from './USER/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './USER/profile/profile.component';
import { CartComponent } from './USER/cart/cart.component';

export const routes: Routes = [

    {
        path:'login', component:LoginComponent
    },

    { 
        path: '', redirectTo: '/login',pathMatch:"full"
    },
    {
        path:'register', component:RegisterComponent
    },

    {
        path:'', component:UnavbarComponent,
         children:[

            { path:'home', component:HomeComponent},

            { path:'product', component:ProductsComponent},

            { path:'about', component:AboutUsComponent},

            { path:'contact', component:ContactUsComponent},

            { path:'cart', component:CartComponent},

            { path:'profile', component:ProfileComponent}
            
          
        ]
    }
];
