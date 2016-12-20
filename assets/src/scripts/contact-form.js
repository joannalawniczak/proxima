import FormValidator from '../../../node_modules/form-validator/src/form-validator.js';

/**
 * Contact form validation and mock of success message.
 */
export default function contactForm() {
	const formEl = document.querySelector( 'form' );
	const submitEl = formEl.querySelector( '.btn' );

	// Form validation
	const formValidator = new FormValidator( formEl, {
		rules: {
			name: {
				required: 'Podaj imię i nazwisko'
			},
			email: {
				required: 'Podaj swój adres email',
				email: 'Niepoprawny adres email'
			},
			message: {
				required: 'Napisz wiadomość'
			},
		},
		success: ( e ) => {
			e.preventDefault();

			submitEl.classList.add( 'loading' );
			formValidator.disable();

			setTimeout( () => {
				submitEl.classList.remove( 'loading' );
				formValidator.reset();
				formValidator.enable();
			}, 3000 );
		}
	} );
}
