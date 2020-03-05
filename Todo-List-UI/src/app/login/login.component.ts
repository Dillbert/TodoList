import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { ApiService } from '../../api/api.service';
import { User } from '../../api/model';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	
	@Input()
	user: User;
	
	@Output()
	userChanged : EventEmitter<User> = new EventEmitter<User>();
	
	failedAttempts : number = 0;
	constructor(private api: ApiService) { }
	ngOnInit() {
	}

	doLogin() {
		console.log("login button clicked");
		this.api.login(this.user, this.onLogin);
	}
	
	onLogin = (response : User) => { 
		console.log("login response:",response);
		this.user = response;
		if(this.user && this.user.userId){
			this.user.loggedIn = true; 
			this.userChanged.emit(this.user); 
		} else {
			this.failedAttempts++;
		}
		this.user.password = "";
	}
}
