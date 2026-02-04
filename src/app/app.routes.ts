import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { About } from './pages/about/about';
import { Recipe } from './pages/recipe/recipe';
import { ViewReciipe } from './pages/view-reciipe/view-reciipe';
import { Contact } from './pages/contact/contact';
import { SavedRecipe } from './pages/saved-recipe/saved-recipe';
import { Auth } from './components/auth/auth';

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
        path:'view-recipe',component:ViewReciipe
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
        path:'login',component:Auth
    }
]
