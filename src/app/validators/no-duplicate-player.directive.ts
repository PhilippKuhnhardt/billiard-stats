/** A player can't be on both teams */
import {AbstractControl, ValidatorFn} from '@angular/forms';

export function noDuplicatePlayerValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    if (!control.parent) return null;
    let playerListOne = control.parent.value.teamOne;
    if(!playerListOne) return null
    const forbidden = control.value.some(player => playerListOne.includes(player));
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}
