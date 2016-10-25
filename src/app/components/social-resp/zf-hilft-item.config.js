/**
 * Created by danieldihardja on 27/09/16.
 */

import settings from '../../app.settings';

function config($crudProvider) {

	var imgOptions = {
		container: 'assets',
		maxWidth: settings.imgMaxWidth,
		maxHeight: settings.imgMaxHeight
	};

	var zfHilftMedia = $crudProvider.model('SvZfhilftMedia');

	zfHilftMedia.listView()
		.backButton(true)
		.title('/ Medien')
		.field('id')
		.field('publish');

	zfHilftMedia.createView()
		.field('isLogo', 'checkbox')
		.field('image', 'file', imgOptions);


	zfHilftMedia.editView()
		.field('publish', 'checkbox')
		.field('isLogo', 'checkbox')
		.field('image', 'file', imgOptions)

		.translationKey('svZfhilftMediaId')
		.translationField('image', 'file', imgOptions)

}
export default config;

