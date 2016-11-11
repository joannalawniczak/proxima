import mobileNavigation from './mobile-navigation.js';
import animatedLabel from './animatedlabel.js';
import mapInit from './mapinit.js';

mobileNavigation( document.querySelector( '.page-header' ) );
animatedLabel( document.querySelectorAll( 'form .control' ) );
window.mapInit = mapInit;
