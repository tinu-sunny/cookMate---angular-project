import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { About } from './pages/about/about';
import { Recipe } from './pages/recipe/recipe';

export const routes: Routes = [
    {
        path:'',component:LandingPage
    },
    {
        path:'about',component:About
    },
    {
        path:'all-recipe',component:Recipe
    }
];
