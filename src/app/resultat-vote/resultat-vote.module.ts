import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultatVotePageRoutingModule } from './resultat-vote-routing.module';

import { ResultatVotePage } from './resultat-vote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultatVotePageRoutingModule
  ],
  declarations: [ResultatVotePage]
})
export class ResultatVotePageModule {}
