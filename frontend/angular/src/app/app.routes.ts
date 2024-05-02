import { Routes } from '@angular/router';
import { PanelComponent } from './pages/panel/panel.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TeamComponent } from './pages/team/team.component';
import { AddMemberComponent } from './pages/add-member/add-member.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: "" , component: PanelComponent, title: "HR Web | Panel", canActivate: [ authGuard ] },
  { path: "profile", component: ProfileComponent, title: "HR Web | Profile", canActivate: [ authGuard ] },
  { path: "team", component: TeamComponent, title: "HR Web | Team", canActivate: [ authGuard ] },
  { path: "add-member", component: AddMemberComponent, title: "HR Web | Add Member", canActivate: [ authGuard ] },
  { path: "login", component: LoginComponent, title: "HR Web | Login" },
  { path: "**", redirectTo: "" }
];
