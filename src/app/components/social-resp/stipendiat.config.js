/**
 * Created by danieldihardja on 27/09/16.
 */

import settings from '../../app.settings';

function config($crudProvider) {

	var stipendiat = $crudProvider.model('SvStipendiat');

	stipendiat.listView()
		.backButton(true)
		.title('/ Personen')
		.field('id')
		.field('publish')

	stipendiat.createView()
		.field('year')
		.field('image', 'file', {container: 'assets'})
		.field('bio', 'text')
		.field('slug')
		.field('component')

	stipendiat.editView()
		.field('publish', 'checkbox')
		.field('year')
		.field('image', 'file', {container: 'assets'})
		.field('bio', 'text')
		.field('slug')
		.field('component')

		.translationKey('svStpendiatId')
		.translationField('year')
		.translationField('image', 'file', {container: 'assets'})
		.translationField('bio', 'text')
}
export default config;