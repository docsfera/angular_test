import {Injectable} from "@angular/core"
import {Apollo, gql} from "apollo-angular"
import {Observable} from "rxjs"
import {Data} from "../models/Data"
import {ApolloQueryResult} from "@apollo/client/core/types"
import {Format} from "../models/Format"
import {Season} from "../models/Season"

const GET_PAGE = gql`
  query {
    Page(page: 1) {
      media{
        id
        title {
          romaji
        }
        type
        season
        format
      }
    }
  }
`

@Injectable({
  providedIn: 'root'
})

export class MainService {

  formats: Format[] = []
  season: Season = ""
  currentPage = 1
  searchString = ""
  constructor(private apollo: Apollo) {

  }
  getData(): Observable<ApolloQueryResult<Data>>{
    return this.apollo.query<Data>({query: GET_PAGE})
  }

  getCurrentPage(){
    return this.currentPage
  }
  setCurrentPage(num: number): void{
    this.currentPage = num
  }
  plusCurrentPage(){
    this.currentPage = this.currentPage + 1
  }
  minusCurrentPage(){
    this.currentPage = this.currentPage - 1
  }
  changeFormats(format: Format): void{
    this.setCurrentPage(1)
    let index = this.formats.indexOf(format)
    if(index !== -1){
      let arr = this.formats.slice()
      arr.splice(index, 1)
      this.formats = arr
    }else{
      this.formats = [...this.formats, format]
    }
  }
  getFormats(){
    return this.formats
  }

  changeSeason(season: Season){
    this.season = season
  }
  getSeason(){
    return this.season
  }
  getSearchString(){
    return this.searchString
  }
  setSearchString(str: string){
    this.searchString = str
  }
}
