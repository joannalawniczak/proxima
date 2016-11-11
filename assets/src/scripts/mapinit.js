/* global google */

export default function mapInit() {
	var map = new google.maps.Map( document.getElementById( 'map' ), {
		center: {lat: 52.985320, lng: 16.918554},
		zoom: 15,
		scrollwheel: false,
		streetViewControl: false
	} );

	new google.maps.Marker( {
		position: { lat: 52.985320, lng: 16.918554 },
		map: map,
		animation: google.maps.Animation.DROP,
		title: 'Proxima, ul. Młyńska 3, Chodzież',
		icon: 'assets/dist/images/marker.png'
	} );
}
