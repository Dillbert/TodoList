import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Todo, Deferred, User } from '../api/model';


@Injectable()
export class ApiService {
    //hack cause tried enabling in my server.js to no avail
    url: string = 'https://cors-anywhere.herokuapp.com/http://178.62.25.59:3000/';
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Credentials': 'true'
    };
    constructor(private http: HttpClient) { }

    public getTodo(userId :number, oncomplete: Deferred<Todo[]>) {
        let requestOptions = {
            headers: new HttpHeaders(this.headers)
        }
        return this.http.get(this.url + 'getTodo/' +userId, requestOptions).toPromise().then(oncomplete);
    }

    public updateTodo(todo : Todo,  oncomplete: Deferred<Todo>) {
	   let requestOptions = {
	            headers: new HttpHeaders(this.headers)
	        }
        return this.http.post(this.url + 'updateTodo/' +todo.todoId, todo,  requestOptions).toPromise().then(oncomplete); 
   }

   public createTodo(todo : Todo,  oncomplete: Deferred<Todo>) {

        return this.http.post(this.url + 'createTodo/', todo).toPromise().then(oncomplete); 
   }

    public createUser(user: User) {
        return this.http.post(this.url + 'createUser/', user);
    }

	 public login(user: User,  oncomplete: Deferred<User>) {
		console.log("called login");
        return this.http.post(this.url + 'login/', user).toPromise().then(oncomplete);
    }
}
