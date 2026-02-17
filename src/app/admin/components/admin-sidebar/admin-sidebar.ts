import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from '@ng-icons/core';


@Component({
  selector: 'app-admin-sidebar',
  imports: [NgIcon,RouterLink ],
  templateUrl: './admin-sidebar.html',
  styleUrl: './admin-sidebar.css',
})
export class AdminSidebar {

}
