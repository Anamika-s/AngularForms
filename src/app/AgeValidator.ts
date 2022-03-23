import {AbstractControl , ValidatorFn} from '@angular/forms';
export function ageRangeValidator(control : AbstractControl): {[Key: string] : boolean} |null
{

   if(control.value !==undefined && (isNaN(control.value) || control.value < 18 || control.value > 45))
   {
     return {'ageRange':true};
     
   }
   return null;
}