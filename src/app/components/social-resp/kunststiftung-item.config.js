/**
 * Created by danieldihardja on 27/09/16.
 */

import settings from '../../app.settings';

function config($crudProvider) {

	var imgOptions = {
		container: 'assets',
		maxWidth: settings.surfaceWidth,
		maxHeight: settings.surfaceHeight
	};

	var item = $crudProvider.model('SvKunststiftungMedia');

	item.listView()
		.backButton(true)
		.title('/ Medien')
		.field('id')
		.field('publish');

	item.createView()
		.field('isLogo', 'checkbox')
		.field('image', 'file', imgOptions);


	item.editView()
		.field('publish', 'checkbox')
		.field('isLogo', 'checkbox')
		.field('image', 'file', imgOptions)

		.translationKey('svKunststiftungMediaId')
		.translationField('image', 'file', imgOptions)

}
export default config;
