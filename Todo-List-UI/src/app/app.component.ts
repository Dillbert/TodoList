import { Component, Inject } from '@angular/core';
import { ApiService } from '../api/api.service';
import { User, DialogData } from '../api/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 	 title = 'Todo-List-UI';
	user: User = {
		email : "",
		password : "",
		loggedIn : false
	}

	constructor(private api: ApiService) {
	}

 	setUser(newUser : User){
		console.log("Event registerd");
		this.user = newUser;
	}
}
