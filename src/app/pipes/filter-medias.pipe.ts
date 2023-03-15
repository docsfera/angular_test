import {Pipe, PipeTransform} from "@angular/core"
import {Media} from "../models/Media"

@Pipe({
  name: "filterMedias"
})

export class FilterMediasPipe implements PipeTransform {
  transform(medias: Media[], search: string): Media[] {
    if(medias.length && search){
      return medias.filter(p =>
        p.title.romaji && p.title.romaji.toLowerCase().includes(search.toLowerCase()))
    }else{
      return medias
    }
  }
}
