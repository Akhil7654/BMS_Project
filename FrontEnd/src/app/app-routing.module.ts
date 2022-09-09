import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { MapComponent } from './pages/map/map.component';
import { RoutedetailsComponent } from './pages/routedetails/routedetails.component';
import { FeedetailComponent } from './pages/feedetail/feedetail.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './admin/student/student.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'account',component:AccountComponent},
  {path:'map',component:MapComponent},
  {path:'routedetails',component:RoutedetailsComponent},
  {path:'feedetail',component:FeedetailComponent},
  {path:'settings',component:SettingsComponent},
  {path:'student',component:StudentComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
