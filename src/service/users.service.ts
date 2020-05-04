import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsers } from './../app/user'; 
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

private endpoint = 'http://jsonplaceholder.typicode.com/users';

constructor(private http:HttpClient) { }

getUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(this.endpoint);
    }
}