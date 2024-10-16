import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule , NgFor ,NgIf],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit {
   taskArray = [
    {taskName: 'Brush teeth', isCompleted: false},
    {taskName: 'Wash dishes', isCompleted: false},
    {taskName: 'Finish homework', isCompleted: true},
    {taskName: 'Go for a walk', isCompleted: false},
    {taskName: 'Read a book', isCompleted: true}
  ];
  
  constructor(){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  onDelete(index : number) {
     console.log(index);
     this.taskArray.splice(index ,1)
    }
    


  onSubmit(form :NgForm){
    console.log(form)
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted :false
    })
    form.reset();
  }


  onCheck(index : number) {
    console.log(this.taskArray)
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted ;
    }
    
}
