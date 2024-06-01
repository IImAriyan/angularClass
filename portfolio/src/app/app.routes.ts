import { Routes } from '@angular/router';
import { HomeComponent } from './_pages/home/home.component';
import { ProjectsComponent } from './_pages/projects/projects.component';
import { EducationComponent } from './_pages/education/education.component';

export const routes: Routes = [
    {path: '',redirectTo: 'home', pathMatch:'full'},
    {path: 'home' , component: HomeComponent},
    {path: 'projects' , component: ProjectsComponent},
    {path: 'education', component: EducationComponent}
];
