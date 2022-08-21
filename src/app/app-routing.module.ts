import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";

const mis_rutas: Routes = [
    { path: 'about', component: AboutComponent },
    { path: "**", pathMatch: 'full', redirectTo: 'about'}

]

@NgModule({
    imports: [
        RouterModule.forRoot( mis_rutas),
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{ }