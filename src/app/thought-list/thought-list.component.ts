import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { Thought } from '../thought.model';

@Component({
  selector: 'app-thought-list',
  templateUrl: './thought-list.component.html',
  styleUrls: ['./thought-list.component.css']
})
export class ThoughtListComponent implements OnInit {
  thoughts: Thought[] = [];

  constructor(private thoughtService: ThoughtService) { }

  ngOnInit(): void {
    this.thoughtService.getThoughts().subscribe(
      (data) => {
        this.thoughts = data;
      },
      (error) => {
        console.error('Error fetching thoughts', error);
      }
    );
  }
}
