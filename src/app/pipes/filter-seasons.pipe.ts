import {Pipe, PipeTransform} from "@angular/core"
import {Media} from "../models/Media";

@Pipe({
  name: "filterTypes"
})

export class FilterTypesPipe implements PipeTransform {

  transform(medias: Media[], type: string): Media[] {
    if(medias.length && search){
      console.log(medias, search)
      console.log(medias.filter(p =>
        p.title.english && p.title.english.toLowerCase().includes(search.toLowerCase())))
      return medias.filter(p =>
        p.title.english && p.title.english.toLowerCase().includes(search.toLowerCase()))
    }else{
      return medias
    }

  }

}
