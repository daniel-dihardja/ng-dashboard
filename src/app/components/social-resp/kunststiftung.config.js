/**
 * Created by danieldihardja on 27/09/16.
 */

import settings from '../../app.settings';

function config($crudProvider) {

	var kunstStiftung = $crudProvider.model('SvKunststiftung');

	kunstStiftung.listView()
		.title('Kunststiftung')
		.field('title')
		.field('publish')

	kunstStiftung.createView()
		.field('title')
		.field('description', 'text')
		.field('image', 'file', {container: 'assets'})
		.field('slug')
		.field('component')

	kunstStiftung.editView()
		.title('Kunststiftung')
		.field('title')
		.field('description', 'text')
		.field('image', 'file', {container: 'assets'})
		.field('slug')
		.field('component')

		.translationKey('svKunststiftungId')
		.translationField('title')
		.translationField('description', 'text')
		.translationField('image', 'file', {container: 'assets'})

		.hasManyLink('SvKunststiftungMedia', 'svKunststiftungId')
}
export default config;
