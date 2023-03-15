import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {MovieComponent} from "./components/movie/movie.component"
import {AppMainComponent} from "./components/app-main/app-main.component"

const routes: Routes = [
  { path: '', component: AppMainComponent },
  { path: 'movie/:id', component: MovieComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
