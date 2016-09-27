/**
 * Created by danieldihardja on 27/09/16.
 */

import settings from '../../app.settings';

function config($crudProvider) {

	var musikpreis = $crudProvider.model('SvMusikpreis');

	musikpreis.listView()
		.title('Musikpreis')
		.field('title')
		.field('publish');

	musikpreis.createView()
		.field('title')
		.field('slug')
		.field('description', 'text')
		.field('introText', 'text')
		.field('image')
		.field('left')
		.field('top')
		.field('component');

	musikpreis.editView()
		.field('title')
		.field('slug')
		.field('description', 'text')
		.field('introText', 'text')
		.field('image', 'file', {container: 'assets'})
		.field('left')
		.field('top')
		.field('component')

		.translationKey('svMusikpreisId')
		.translationField('title')
		.translationField('description', 'text')
		.translationField('introText', 'text')
		.translationField('image', 'file', {container: 'assets'})


		.hasManyLink('SvMusikpreisPerson', 'svMusikpreisId')
}
export default config;
