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

	var kultur = $crudProvider.model('SvKultur');

	kultur.listView()
		.title('Kultur')
		.field('title')
		.field('publish');

	kultur.createView()
		.field('title')
		.field('description', 'text')
		.field('image', 'file', imgOptions)
		.field('introText', 'text')
		.field('introLeft')
		.field('introTop')
		.field('introWidth')
		.field('introHeight')
		.field('slug')
		.field('left')
		.field('top')
		.field('component');

	kultur.editView()
		.title('Kultur')
		.field('title')
		.field('description', 'text')
		.field('image', 'file', imgOptions)
		.field('introText', 'text')
		.field('introLeft')
		.field('introTop')
		.field('introWidth')
		.field('introHeight')
		.field('slug')
		.field('left')
		.field('top')
		.field('component')

		.translationKey('svKulturId')
		.translationField('title')
		.translationField('description', 'text')
		.translationField('image', 'file', imgOptions)
		.translationField('introText', 'text')
		.hasManyLink('SvKulturItem', 'svKulturId', {label: 'Zu den Einträgen'});
}
export default config;
