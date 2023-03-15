import { Component, Input } from '@angular/core'
import {Media} from "../../models/Media"
import {Router} from "@angular/router"

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() anime: Media = {id: "0", season: "", type: "", title: {romaji: ""}, format: ""}
  @Input() countMedias = 0
  @Input() currentPage = 1
  @Input() lastPage: void | undefined

  constructor(private router: Router) {

  }

  pageController(): boolean { // какие Movie отображать
    return this.countMedias < 5 * this.currentPage && this.countMedias >= 5 * (this.currentPage - 1)
  }

  async goToMovie(id: string) {
    await this.router.navigate(['/movie', id])
  }
}
