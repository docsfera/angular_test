import {Component, Input, OnInit} from '@angular/core'
import {Season} from "../../models/Season"
import {Format} from "../../models/Format"
import {MainService} from "../../services/main.service"
import {Data} from "../../models/Data"

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css']
})

export class AppMainComponent implements OnInit{
  title = 'client';
  data: Data = {Page: {media: []}}
  term = ""
  countMedias = 0

  clicked = false
  isLoading = true

  constructor(public mainService: MainService) {

  }

  ngOnInit(): void {
    this.mainService.getData().subscribe(({data}) => {
      this.data = data
      this.isLoading = false
      this.countMedias = data.Page.media.length
    })
  }

  clearCountPage () {
    this.mainService.setCurrentPage(1)
  }

  isFormatSelected(format: Format): boolean{
    return this.mainService.getFormats().includes(format)
  }
  getFormatValue(){
    return `Выбрано ${this.mainService.getFormats().length}`
  }

  setCountMedias(num: number) {
    this.countMedias = num
  }

  seasonsChange(season: Season){
    this.clearCountPage()
    this.mainService.changeSeason(season)
  }
  isSeasonSelected(season: Season){
    return this.mainService.getSeason() === season
  }
  onKey(event: KeyboardEvent){
    let str = (event.target as HTMLInputElement).value
    this.mainService.setSearchString(str)
    this.clearCountPage()
  }
}
