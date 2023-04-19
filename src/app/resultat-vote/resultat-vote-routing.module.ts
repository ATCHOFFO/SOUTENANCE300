import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultatVotePage } from './resultat-vote.page';

const routes: Routes = [
  {
    path: '',
    component: ResultatVotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultatVotePageRoutingModule {}
