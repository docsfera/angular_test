import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import {Apollo, gql} from "apollo-angular"
import {Media} from "../../models/Media"

const GET_MEDIA_BY_ID = gql`
  query ($id: Int) {
    Media (id: $id) {
      id
      title {
        romaji
      }
      type
      season
      format
      status
      tags {
        name
      }
    }
  }
`

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent{
  media: Media = {id: "", format: "", season: "", title: {romaji: ""}, type: ""}
  isLoading = true

  constructor(private route: ActivatedRoute, private apollo: Apollo) {

  }

  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.apollo.query<{Media: Media}>({query: GET_MEDIA_BY_ID, variables: {id: params['id']}})
        .subscribe(({data}) => {
          this.media = data.Media
          this.isLoading = false
        })
    })
  }

  getTags(){
    let str = ""
    this.media.tags?.map(({name}, index) => {
      index === 0 ? str = name : str = `${str}, ${name}`
    })
    return str
  }
  getIsLoading(){
    return this.isLoading
  }
  getInfoCard(str: string | undefined){
    return str || "Неизвестен"
  }
}
