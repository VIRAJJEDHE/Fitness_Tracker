import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkoutComponent } from './workout/workout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WorkoutComponent],
  templateUrl: './app.component.html',
  //template:'Hello from inline template viraj',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fitness_Tracker';
}
