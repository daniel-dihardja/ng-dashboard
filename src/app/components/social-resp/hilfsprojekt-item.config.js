/**
 * Created by danieldihardja on 27/09/16.
 */

import settings from '../../app.settings';

function config($crudProvider) {

	var item = $crudProvider.model('SvZfhilftProjectMedia');

	item.listView()
		.title('/ Einträge')
		.backButton(true)
		.field('id')
		.field('publish')

	item.createView()
		.field('type', 'select', {values: ['image', 'video']})
		.field('dateString')
		.field('info', 'text')
		.field('src', 'file', {container: 'assets'})
		.field('thumb', 'file', {container: 'assets'})



	item.editView()
		.field('publish', 'checkbox')
		.field('type', 'select', {values: ['image', 'video']})
		.field('dateString')
		.field('info', 'text')
		.field('src', 'file', {container: 'assets'})
		.field('thumb', 'file', {container: 'assets'})

		.translationKey('svZfhilftProjectMediaId')
		.translationField('dateString')
		.translationField('info', 'text')
		.translationField('src', 'file', {container: 'assets'})
		.translationField('thumb', 'file', {container: 'assets'})

}
export default config;
