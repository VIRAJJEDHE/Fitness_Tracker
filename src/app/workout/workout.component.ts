import { Component } from '@angular/core';
import { workout } from './workout';
import { randomUUID } from 'crypto';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.css'
})
export class WorkoutComponent {
  log: workout={
    name: 'bicep curl',
    id:1,
    type: 'Weights'
  }
  clicked()
  {
    alert("you clicked "+this.log.name);
  }
}
