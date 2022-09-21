import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { NgModule } from "@angular/core";

const APP_ROUTES: Routes = [
{path:'',component:HomepageComponent}
];

@NgModule({
    declarations:[],
    imports:[RouterModule.forRoot(APP_ROUTES)],
    exports:[RouterModule]
})

export class AppRoutingModule{}