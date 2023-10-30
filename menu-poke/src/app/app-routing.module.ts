import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BerriesListComponent } from './components/berries-list/berries-list.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'pokemon-list', component: PokemonListComponent},
  {path: 'berries-list', component: BerriesListComponent},
  { path: '', pathMatch: 'full', redirectTo: '/pokemon-list' },
  {path:  '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
