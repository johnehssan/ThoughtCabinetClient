import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThoughtListComponent } from './thought-list/thought-list.component';
import { ThoughtDetailComponent } from './thought-detail/thought-detail.component';
import { CreateThoughtComponent } from './create-thought/create-thought.component';
import { EditThoughtComponent } from './edit-thought/edit-thought.component';

const routes: Routes = [
  { path: '', redirectTo: '/thoughts', pathMatch: 'full' },
  { path: 'thoughts', component: ThoughtListComponent },
  { path: 'thoughts/:id', component: ThoughtDetailComponent },
  { path: 'create-thought', component: CreateThoughtComponent },
  { path: 'edit-thought/:id', component: EditThoughtComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
