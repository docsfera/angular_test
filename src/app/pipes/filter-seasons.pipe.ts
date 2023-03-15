import {Pipe, PipeTransform} from "@angular/core"
import {Media} from "../models/Media"
import {Season} from "../models/Season"

@Pipe({
  name: "filterSeasons"
})

export class FilterSeasonsPipe implements PipeTransform {
  transform(medias: Media[], season: Season): Media[] {
    if(medias.length && season){
      return medias.filter(p => p.season === season)
    }else{
      return medias
    }
  }
}
