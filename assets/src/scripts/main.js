import smoothScroll from '../../../node_modules/smooth-scroll/dist/js/smooth-scroll.js';
import mobileNavigation from './mobile-navigation.js';
import animatedLabel from './animatedlabel.js';
import mapInit from './mapinit.js';
import contactForm from './contact-form.js';

mobileNavigation( document.querySelector( '.page-header' ) );
animatedLabel( document.querySelectorAll( 'form .control' ) );
window.mapInit = mapInit;
smoothScroll.init( { speed: 700 } );
contactForm();

