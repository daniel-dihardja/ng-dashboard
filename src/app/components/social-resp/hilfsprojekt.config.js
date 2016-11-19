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
		.field('slug', null, {showOnly: 'admin'})
		.field('component', null, {showOnly: 'admin'})


	project.editView()
		.title('#ENTITY_TITLE#')
		.field('title')
		.field('date')
		.field('introText')
		.field('slug', null, {showOnly: 'admin'})
		.field('component', null, {showOnly: 'admin'})

		.translationKey('svZfhilftProjectId')
		.translationField('title')
		.translationField('date')
		.translationField('introText', 'text')

		.hasManyLink('SvZfhilftProjectMedia', 'svZfhilftProjectId', {label: 'Zu den Projekt Einträgen'})
}
export default config;
