import { Input, Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { User, Todo } from '../../api/model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	@Input()
	userId : number;
	todoList : Todo [] = [];
		
  constructor(private api : ApiService, public matDialog: MatDialog) { }

      ngOnInit() {
		if(this.userId){
			 this.api.getTodo(this.userId, this.onGetTodoList);
		}

  
    }

	onGetTodoList = (response : Todo[]) => { 
		if(response && response.length > 0){
			this.todoList = response; 
		}
	}

	doRemove(todoId : number){
		
	}
	
	doEdit(todoId : number){
		
	}
	
	createTodoDialog(){
		const dialogConfig = new MatDialogConfig();
	    // The user can't close the dialog by clicking outside its body
	    dialogConfig.disableClose = true;
	    dialogConfig.id = "modal-component";
	    dialogConfig.height = "350px";
	    dialogConfig.width = "600px";
	    // https://material.angular.io/components/dialog/overview
	    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);		
		modalDialog.afterClosed();
	}
}
