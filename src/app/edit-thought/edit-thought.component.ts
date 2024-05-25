import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThoughtService } from '../thought.service';
import { Thought } from '../thought.model';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent implements OnInit {
  thought: Thought | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private thoughtService: ThoughtService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.thoughtService.getThoughtById(id).subscribe(
      (data) => {
        this.thought = data;
      },
      (error) => {
        console.error('Error fetching thought details', error);
      }
    );
  }

  updateThought(): void {
    if (this.thought) {
      this.thoughtService.updateThought(this.thought).subscribe(() => {
        this.router.navigate(['/thoughts', this.thought!.id]);
      });
    }
  }
}
