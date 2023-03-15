import {Pipe, PipeTransform} from "@angular/core"
import {Media} from "../models/Media"

@Pipe({
  name: "filterFormats"
})

export class FilterFormatsPipe implements PipeTransform {
  transform(medias: Media[], formats: any): Media[] {
    if(medias.length && formats.length){
      return medias.filter(p => formats.includes(p.format))
    }else{
      return medias
    }
  }
}
