import { Component } from '@angular/core';
import { AdminDashboard } from "../admin-dashboard/admin-dashboard";
import { AdminSidebar } from "../../components/admin-sidebar/admin-sidebar";

@Component({
  selector: 'app-manage-recipe',
  imports: [AdminDashboard, AdminSidebar],
  templateUrl: './manage-recipe.html',
  styleUrl: './manage-recipe.css',
})
export class ManageRecipe {

}
