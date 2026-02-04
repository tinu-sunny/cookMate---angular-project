import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboard } from './pages/admin-dashboard/admin-dashboard';
import { DownloadList } from './pages/download-list/download-list';
import { ManageRecipe } from './pages/manage-recipe/manage-recipe';
import { UserList } from './pages/user-list/user-list';
import { RequestList } from './pages/request-list/request-list';
import { RecipeList } from './pages/recipe-list/recipe-list';

const routes: Routes = [

  {
    path:'', component:AdminDashboard
  },
  {
    path:'download-list',component:DownloadList
  },
  {
    path:'manage-recipe/add',component:ManageRecipe
  },
  {
    path:'user-list',component:UserList
  },
  {

    path:'request-list',component:RequestList
  },
  {
    path:'recipe-list',component:RecipeList
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
