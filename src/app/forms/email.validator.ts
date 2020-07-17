import { AbstractControl, ValidatorFn } from '@angular/forms';

export function EmailValidator(): ValidatorFn {
	return (control: AbstractControl): {[key: string]: any} | null => {
		const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		
		const invalidEmail = emailRegex.test(control.value);
		
		return invalidEmail ? {'error': 'Invalid email'} : null;
	};
};
