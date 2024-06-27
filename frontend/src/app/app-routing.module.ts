import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignFormComponent } from './campaign-form/campaign-form.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';

const routes: Routes = [
  { path: 'campaign-form', component: CampaignFormComponent },
  { path: 'campaign-list', component: CampaignListComponent },
  { path: 'campaign-detail/:id', component: CampaignDetailComponent },
  { path: '', redirectTo: '/campaign-form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
