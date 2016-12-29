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

	var musikpreis = $crudProvider.model('SvMusikpreis');

	musikpreis.listView()
		.title('Musikpreis')
		.field('title')
		.field('publish');

	musikpreis.createView()
		.field('title')
		.field('slug', null, {showOnly: 'admin'})
		.field('description', 'text', {showOnly: 'admin'})
		.field('introText', 'text')
		.field('image')
		.field('left', null, {showOnly: 'admin'})
		.field('top', null, {showOnly: 'admin'})
		.field('component', null, {showOnly: 'admin'});

	musikpreis.editView()
		.title('Musikpreis')
		.field('title')
		.field('slug', null, {showOnly: 'admin'})
		.field('description', 'text', {showOnly: 'admin'})
		.field('introText', 'text')
		.field('image', 'file', imgOptions)
		.field('left', null, {showOnly: 'admin'})
		.field('top', null, {showOnly: 'admin'})
		.field('component', null, {showOnly: 'admin'})

		.translationKey('svMusikpreisId')
		.translationField('title')
		.translationField('description', 'text', {showOnly: 'admin'})
		.translationField('introText', 'text')
		.translationField('image', 'file', imgOptions)


		.hasManyLink('SvMusikpreisPerson', 'svMusikpreisId', {label: 'Zu den Musikern'})
}
export default config;
