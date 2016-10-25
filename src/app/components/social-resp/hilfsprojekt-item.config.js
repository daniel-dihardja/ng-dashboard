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

	var item = $crudProvider.model('SvZfhilftProjectMedia');

	item.listView()
		.title('/ Einträge')
		.backButton(true)
		.field('id')
		.field('publish')

	item.createView()
		.field('type', 'select', {values: ['image', 'video']})
		.field('dateString')
		.field('info', 'text')
		.field('src', 'file', imgOptions)
		.field('thumb', 'file', imgOptions)



	item.editView()
		.field('publish', 'checkbox')
		.field('type', 'select', {values: ['image', 'video']})
		.field('dateString')
		.field('info', 'text')
		.field('src', 'file', imgOptions)
		.field('thumb', 'file', imgOptions)

		.translationKey('svZfhilftProjectMediaId')
		.translationField('dateString')
		.translationField('info', 'text')
		.translationField('src', 'file', imgOptions)
		.translationField('thumb', 'file', imgOptions)

}
export default config;
