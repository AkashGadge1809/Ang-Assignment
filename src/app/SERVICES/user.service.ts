import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private URL = "http://localhost:3000/user";
  private userdata={}

  setuserdata(data:any){
    this.userdata=data
  }
  getuserdata(){
    return this.userdata
  }
  getuser():Observable<any>
  {
    return this.http.get(this.URL);
  }

  saveuser(user:any):Observable<any>
  {
    return this.http.post(this.URL,JSON.stringify(user))
  }
}
