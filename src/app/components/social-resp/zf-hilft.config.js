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
		.field('description', 'text')
		.field('introText', 'text')
		.field('introTextLeft')
		.field('introTextTop')
		.field('introTextWidth')
		.field('introTextHeight')
		.field('slug')
		.field('component');

	zfHilft.editView()
		.title('ZF Hilft')
		.field('title')
		.field('description', 'text')
		.field('introText', 'text')
		.field('introTextLeft')
		.field('introTextTop')
		.field('introTextWidth')
		.field('introTextHeight')
		.field('slug')
		.field('component')

		.translationKey('svZfhilftId')
		.translationField('title')
		.translationField('description', 'text')
		.translationField('introText', 'text')

		.hasManyLink('SvZfhilftMedia', 'svZfhilftId');
}
export default config;

