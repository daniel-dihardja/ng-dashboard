/**
 * Created by danieldihardja on 27/09/16.
 */

import settings from '../../app.settings';

function config($crudProvider) {

	var musikpreisItem = $crudProvider.model('SvMusikpreisPerson');

	musikpreisItem.listView()
		.backButton(true)
		.title('/ Personen')
		.field('name')
		.field('publish')

	musikpreisItem.createView()
		.field('name')
		.field('year')
		.field('bio', 'text')
		.field('image', 'file', {container: 'assets'})
		.field('slug')
		.field('component')


	musikpreisItem.editView()
		.field('publish', 'checkbox')
		.field('name')
		.field('year')
		.field('bio', 'text')
		.field('image', 'file', {container: 'assets'})
		.field('slug')
		.field('component')

		.translationKey('svMusikpreisPersonId')
		.translationField('title')
		.translationField('description', 'text')
		.translationField('introText', 'text')
		.translationField('image', 'file', {container: 'assets'})



}
export default config;
