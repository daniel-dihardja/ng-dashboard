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
		.backButton(true)
		.title('/ Einträge')
		.field('info')
		.field('publish');

	kulturItem.createView()
		.backButton(true)
		.field('dateString', null, {showOnly: 'admin'})
		.field('info')
		.field('content', 'text')
		.field('image', 'file', imgOptions)
		.field('video', 'file', imgOptions)
		.field('slug', null, {showOnly: 'admin'})
		.field('component', null, {showOnly: 'admin'});


	kulturItem.editView()
		.backButton(true)
		.field('dateString', null, {showOnly: 'admin'})
		.field('info')
		.field('content', 'text')
		.field('image', 'file', imgOptions)
		.field('video', 'file', imgOptions)
		.field('slug', null, {showOnly: 'admin'})
		.field('component', null, {showOnly: 'admin'})

		.translationKey('svKulturItemId')
		.translationField('dateString', null, {showOnly: 'admin'})
		.translationField('info', 'text')
		.translationField('content', 'text')
		.translationField('image', 'file', imgOptions)
		.translationField('video', 'file', imgOptions)

}
export default config;
