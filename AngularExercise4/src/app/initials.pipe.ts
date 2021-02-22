import { Pipe, PipeTransform } from '@angular/core';
import { range } from 'rxjs';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: string): unknown {
    
    value=value.replace(/\s+/g, ' ').trim();
    const valueList=value.split(" ");
    console.log(valueList);
    let ans="";
    valueList.forEach((value)=>{
      if (value[0]){
      ans+=value[0]
      }
    })
    return ans;
  }

}
