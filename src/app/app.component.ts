import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { TodolistComponent } from "./todolist/todolist.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  FormsModule,
     TodolistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
}
