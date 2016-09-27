/**
 * Created by danieldihardja on 27/09/16.
 */

import settings from '../../app.settings';

function config($crudProvider) {

	var zfHilftMedia = $crudProvider.model('SvZfhilftMedia');

	zfHilftMedia.listView()
		.title('Musikpreis')
		.field('id')
		.field('publish');

	zfHilftMedia.createView()
		.field('isLogo', 'checkbox')
		.field('image', 'file', {container: 'assets'});


	zfHilftMedia.editView()
		.field('publish', 'checkbox')
		.field('isLogo', 'checkbox')
		.field('image', 'file', {container: 'assets'})

		.translationKey('svZfhilftId')
		.translationField('image', 'file', {container: 'assets'})

}
export default config;

