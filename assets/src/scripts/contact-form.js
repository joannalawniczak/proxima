import FormValidator from '../../../node_modules/form-validator/src/form-validator.js';

/**
 * Contact form validation and mock of success message.
 */
export default function contactForm() {
	const formEl = document.querySelector( 'form' );

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
			}
		},
		success: ( e ) => {
			e.preventDefault();

			formValidator.reset();
			[].forEach.call( formEl.elements, ( el ) => el.classList.remove( 'not-empty' ) );
		}
	} );
}
