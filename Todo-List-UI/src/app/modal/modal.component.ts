import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { Todo } from '../../api/model';
import { ApiService } from '../../api/api.service'
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

	todo : Todo = {
		userId : 1,
		todoName : "",
		todoDescription : "",
		todoSeverity : ""
	};
	
	@Output()
	todoMade : EventEmitter<Todo> = new EventEmitter<Todo>();
	
  constructor(public dialogRef: MatDialogRef<ModalComponent>, private api : ApiService) { }

  ngOnInit() {
  }

  // When the user clicks the action button a.k.a. the logout button in the\
  // modal, show an alert and followed by the closing of the modal
  actionFunction() {
	if(this.todo && this.todo.todoName.length > 0 &&
	this.todo.todoDescription.length > 0 &&
	this.todo.todoSeverity.length > 0){
		this.api.createTodo(this.todo, this.onTodoCreated);
	 	
	}
   
  }

  onTodoCreated= (response : Todo) => { 
	alert("Todo created");
	this.todoMade.emit(response);
	this.closeModal();
 }
  // If the user clicks the cancel button a.k.a. the go back button, then\
  // just close the modal
  closeModal() {
    this.dialogRef.close();
  }

}