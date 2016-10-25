/**
 * Created by danieldihardja on 27/09/16.
 */
/**
 * Created by danieldihardja on 27/09/16.
 */

import settings from '../../../app/app.settings';

function config($crudProvider) {

	var imgOptions = {
		container: 'assets',
		prefWidth: settings.zpImgMaxWidth,
		prefHeight: settings.zpImgMaxHeight,
		maxWidth: settings.surfaceWidth,
		maxHeight: settings.surfaceHeight
	};

	var kulturItem = $crudProvider.model('SvKulturItem');

	kulturItem.listView()
		.title('/ Einträge')
		.field('dateString')
		.field('publish');

	kulturItem.createView()
		.field('dateString')
		.field('info')
		.field('content', 'text')
		.field('image', 'file', imgOptions)
		.field('video', 'file', imgOptions)
		.field('slug')
		.field('component');


	kulturItem.editView()
		.field('dateString')
		.field('info')
		.field('content', 'text')
		.field('image', 'file', imgOptions)
		.field('video', 'file', imgOptions)
		.field('slug')
		.field('component')

		.translationKey('svKulturItemId')
		.translationField('dateString')
		.translationField('info', 'text')
		.translationField('content', 'text')
		.translationField('image', 'file', imgOptions)
		.translationField('video', 'file', imgOptions)

}
export default config;
