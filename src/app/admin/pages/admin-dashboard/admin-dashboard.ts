import { Component } from '@angular/core';
import { AdminSidebar } from "../../components/admin-sidebar/admin-sidebar";
import { Calender } from "../../components/calender/calender";
import { Graph } from "../../components/graph/graph";

@Component({
  selector: 'app-admin-dashboard',
  imports: [AdminSidebar, Calender, Graph],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {

}
