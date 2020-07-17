import { AbstractControl, ValidatorFn } from '@angular/forms';

export function NameValidator(): ValidatorFn {
	return (control: AbstractControl): {[key: string]: any} | null => {
		const nameRegex = /[^A-Za-z\-]/;
		
		const invalidName = nameRegex.test(control.value);
		
		return invalidName ? {'error': 'Invalid string'} : null;
	};
};
