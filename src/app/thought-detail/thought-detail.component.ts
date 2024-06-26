import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThoughtService } from '../thought.service';
import { Thought } from '../thought.model';

@Component({
  selector: 'app-thought-detail',
  templateUrl: './thought-detail.component.html',
  styleUrls: ['./thought-detail.component.css']
})
export class ThoughtDetailComponent implements OnInit {
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

  deleteThought(): void {
    if (this.thought && confirm('Are you sure you want to delete this thought?')) {
      this.thoughtService.deleteThought(this.thought.id).subscribe(() => {
        this.router.navigate(['/thoughts']);
      });
    }
  }
}
