import { Component } from '@angular/core';
import { AdminSidebar } from "../../components/admin-sidebar/admin-sidebar";

@Component({
  selector: 'app-user-list',
  imports: [AdminSidebar],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {

}
