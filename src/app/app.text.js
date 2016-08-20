/**
 * Created by danieldihardja on 18/08/16.
 */
function appText($translateProvider) {

	$translateProvider.translations('de', {

		app: {
			title:	'ZF Admin',
			yes:	'Ja',
			no:		'Nein',
			delete:	'Löschen',
			logout: 'Logout'
		},

		login: {
			title: 		'ZF Login',
			username: 	'Username',
			password: 	'Password',
			submit: 	'Login'
		},

		files: {
			title: 		'Dateien',
			new: 		'Neu',
			upload: 	'Hochladen',
			delete: 	'Löschen',
			list: 		'Liste',
			images:		'Bilder',
			videos:		'Videos'
		},

		profile: {
			title: 		'Profil'
		}
	});

	$translateProvider.preferredLanguage('de');
}
appText.$inject = ['$translateProvider'];
export default appText;