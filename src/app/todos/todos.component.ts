import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: './todos.component.html'
})

export class TodosComponent implements OnInit {
  todos;
  text;

  constructor() { 

  }

ngOnInit() {
	//initialization code
	this.todos = [ //empty array
	];
}

addTodo(){ //this fn pushes the input of the user in the input box into the todos array
	this.todos.push(
		{
			text: this.text
		}
	);
}

removeTodo(todoText){
	for(var i = 0; i< this.todos.length;i++){
		if(this.todos[i].text == todoText){
			this.todos.splice(i, 1); //params starting array pos and deleteCount
		}
	}
}
}
