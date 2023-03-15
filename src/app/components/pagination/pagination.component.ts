import { Component, Input } from '@angular/core'
import {MainService} from "../../services/main.service"

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  @Input() countMedias = 0

  isPrev = false
  isNext = true
  currentPage = 1
  constructor(public mainService: MainService) {

  }

  next() {
    if(this.mainService.getCurrentPage() < this.countMedias / 5){
      this.mainService.plusCurrentPage()
    }
    this.setArrowColor()
  }
  prev() {
    if(this.mainService.getCurrentPage() !== 1){
      this.mainService.minusCurrentPage()
    }
    this.setArrowColor()
  }

  setArrowColor(){
    (this.mainService.getCurrentPage() !== 1) ? this.isPrev = true : this.isPrev = false;
    (this.mainService.getCurrentPage() < this.countMedias / 5) ? this.isNext = true : this.isNext = false
  }
}
