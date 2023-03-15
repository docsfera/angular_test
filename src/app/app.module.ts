import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AppMainComponent } from './components/app-main/app-main.component'
import { CardComponent } from './components/card/card.component'
import { PaginationComponent } from "./components/pagination/pagination.component"
import {MovieComponent} from "./components/movie/movie.component"
// import { FiltersComponent } from './components/filters/filters.component'
import { GraphQLModule } from './graphql.module'
import { HttpClientModule } from '@angular/common/http'
import {FormsModule} from "@angular/forms"
import {FilterMediasPipe} from "./pipes/filter-medias.pipe"
import {FilterSeasonsPipe} from "./pipes/filter-seasons.pipe"
import {FilterFormatsPipe} from "./pipes/filter-formats.pipe"

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    CardComponent,
    MovieComponent,
    PaginationComponent,
    FilterMediasPipe,
    FilterSeasonsPipe,
    FilterFormatsPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
