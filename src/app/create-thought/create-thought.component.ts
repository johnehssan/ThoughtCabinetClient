import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThoughtService } from '../thought.service';
import { Thought } from '../thought.model';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent {
  thought: Thought = { id: 0, title: '', content: '', createdAt: new Date(), updatedAt: new Date() };

  constructor(private thoughtService: ThoughtService, private router: Router) { }

  createThought(): void {
    this.thoughtService.createThought(this.thought).subscribe(() => {
      this.router.navigate(['/thoughts']);
    });
  }
}
