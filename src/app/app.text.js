/**
 * Created by danieldihardja on 18/08/16.
 */

function appText($translateProvider) {

	$translateProvider.translations('de', {

		LOGIN: 		'Login',
		USERNAME: 	'Username',
		PASSWORD: 	'Password',
		CMS_TITLE:	'ZF Forum',

		CREATE: 	'Create',
		EDIT:		'Edit',
		LIST: 		'List',

		TO_MEDIA:	'zu den Medien',
		LED_RING:	'LED Ring',

		SAVE_SUCCESS: 'Erfolgreich gespeichert',
		LOGIN_FAIL: 'Login Fehlgeschlagen!'
	});

	$translateProvider.preferredLanguage('de');
}

appText.$inject = ['$translateProvider'];
export default appText;