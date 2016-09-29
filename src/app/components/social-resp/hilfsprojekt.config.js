/**
 * Created by danieldihardja on 27/09/16.
 */

import settings from '../../app.settings';

function config($crudProvider) {

	var project = $crudProvider.model('SvZfhilftProject');

	project.listView()
		.title('Hilfsprojekte')
		.field('title')
		.field('publish');

	project.createView()
		.title('Hilfsprojekte / *')
		.field('title')
		.field('date')
		.field('introText', 'text')
		.field('slug')
		.field('component')


	project.editView()
		.field('title')
		.field('date')
		.field('introText')
		.field('slug')
		.field('component')

		.translationKey('svZfhilftProjectId')
		.translationField('title')
		.translationField('date')
		.translationField('introText', 'text')

		.hasManyLink('SvZfhilftProjectMedia', 'svZfhilftProjectId')
}
export default config;
