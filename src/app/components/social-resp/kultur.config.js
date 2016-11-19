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
		.field('introLeft', null, {showOnly: 'admin'})
		.field('introTop', null, {showOnly: 'admin'})
		.field('introWidth', null, {showOnly: 'admin'})
		.field('introHeight', null, {showOnly: 'admin'})
		.field('slug', null, {showOnly: 'admin'})
		.field('left', null, {showOnly: 'admin'})
		.field('top', null, {showOnly: 'admin'})
		.field('component', null, {showOnly: 'admin'});

	kultur.editView()
		.title('Kultur')
		.field('title')
		.field('description', 'text')
		.field('image', 'file', imgOptions)
		.field('introText', 'text')
		.field('introLeft', null, {showOnly: 'admin'})
		.field('introTop', null, {showOnly: 'admin'})
		.field('introWidth', null, {showOnly: 'admin'})
		.field('introHeight', null, {showOnly: 'admin'})
		.field('slug', null, {showOnly: 'admin'})
		.field('left', null, {showOnly: 'admin'})
		.field('top', null, {showOnly: 'admin'})
		.field('component', null, {showOnly: 'admin'})

		.translationKey('svKulturId')
		.translationField('title')
		.translationField('description', 'text')
		.translationField('image', 'file', imgOptions)
		.translationField('introText', 'text')
		.hasManyLink('SvKulturItem', 'svKulturId', {label: 'Zu den Einträgen'});
}
export default config;
