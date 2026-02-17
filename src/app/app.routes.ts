import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { About } from './pages/about/about';
import { Recipe } from './pages/recipe/recipe';
import { ViewReciipe } from './pages/view-reciipe/view-reciipe';
import { Contact } from './pages/contact/contact';
import { SavedRecipe } from './pages/saved-recipe/saved-recipe';
import { Auth } from './components/auth/auth';
import { Login } from './components/login/login';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
    {
        path:'',component:LandingPage
    },
    {
        path:'about',component:About
    },
    {
        path:'all-recipe',component:Recipe
    },
    {
        path:'view-recipe/:id',component:ViewReciipe
    },
    {
        path:'about',component:About
    },
    {
        path:'contact',component:Contact
    },
    {
        path:'your-collections',component:SavedRecipe
    },
    {
        path:'register',component:Auth
    },
    {
        path:'login', component:Login
    },
    {
        path:'profile', component:Profile
    },

    // admin module integation to the route 
    // lazy loadded module 

    {
  path:'admin',loadChildren:()=>import('./admin/admin-module').then(m=>m.AdminModule)
    }
]
