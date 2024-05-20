import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../task.service';
import { List } from '../../../app/'

@Component({
  selector: 'app-new-list',
  standalone: true,
  imports: [],
  templateUrl: './new-list.component.html',
  styleUrl: './new-list.component.scss'
})
export class NewListComponent {

  constructor(private taskService: TaskService, private router: Router) { }

  createList(title: string) {
    this.taskService.createList(title).subscribe((list: List) => {
      console.log(list);
      // Now we navigate to /lists/task._id
      this.router.navigate([ '/lists', list._id ]); 
    });
  }

}
