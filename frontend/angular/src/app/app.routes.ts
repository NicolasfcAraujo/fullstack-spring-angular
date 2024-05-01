import { Routes } from '@angular/router';
import { PanelComponent } from './pages/panel/panel.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TeamComponent } from './pages/team/team.component';
import { AddMemberComponent } from './pages/add-member/add-member.component';

export const routes: Routes = [
  { path: "" , component: PanelComponent, title: "HR Web | Panel" },
  { path: "profile", component: ProfileComponent, title: "HR Web | Profile" },
  { path: "team", component: TeamComponent, title: "HR Web | Team" },
  { path: "add-member", component: AddMemberComponent, title: "HR Web | Add Member" }
];
