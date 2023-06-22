import { AbstractControl } from "@angular/forms";

export function MustMatch(controlName: string, matchingControlName: string) {
    return (group: AbstractControl) => {
        const control = group.get(controlName);
        const matchingcontrol = group.get(matchingControlName);

        if (!control || !matchingcontrol) {
            return null;
        }

        if (matchingcontrol.errors && !matchingcontrol.errors["MustMatch"]) {
            return null;
        }

        if (control.value !== matchingcontrol.value) {
            matchingcontrol.setErrors({ MustMatch: true });
        } else {
            matchingcontrol.setErrors(null);
        }
        return null;
    }
}