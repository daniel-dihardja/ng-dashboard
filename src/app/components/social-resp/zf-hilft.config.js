/**
 * Created by danieldihardja on 27/09/16.
 */

import settings from '../../app.settings';

function config($crudProvider) {

	var zfHilft = $crudProvider.model('SvZfhilft');

	zfHilft.listView()
		.title('ZF Hilft')
		.field('title')
		.field('publish');

	zfHilft.createView()
		.title('ZF Hilft')
		.field('title')
		.field('description', 'text', {showOnly: 'admin'})
		.field('introText', 'text')
		.field('introTextLeft', null, {showOnly: 'admin'})
		.field('introTextTop', null, {showOnly: 'admin'})
		.field('introTextWidth', null, {showOnly: 'admin'})
		.field('introTextHeight', null, {showOnly: 'admin'})
		.field('slug', null, {showOnly: 'admin'})
		.field('component', null, {showOnly: 'admin'});

	zfHilft.editView()
		.title('ZF Hilft')
		.field('title')
		.field('description', 'text', {showOnly: 'admin'})
		.field('introText', 'text')
		.field('introTextLeft',  null, {showOnly: 'admin'})
		.field('introTextTop',  null, {showOnly: 'admin'})
		.field('introTextWidth',  null, {showOnly: 'admin'})
		.field('introTextHeight',  null, {showOnly: 'admin'})
		.field('slug', null, {showOnly: 'admin'})
		.field('component', null, {showOnly: 'admin'})

		.translationKey('svZfhilftId')
		.translationField('title')
		.translationField('description', 'text', {showOnly: 'admin'})
		.translationField('introText', 'text')

		.hasManyLink('SvZfhilftMedia', 'svZfhilftId', {label: 'Zu den Medien'});
}
export default config;

