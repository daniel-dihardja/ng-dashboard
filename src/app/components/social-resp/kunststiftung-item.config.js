/**
 * Created by danieldihardja on 27/09/16.
 */

import settings from '../../app.settings';

function config($crudProvider) {

	var item = $crudProvider.model('SvKunststiftungMedia');

	item.listView()
		.title('Kunststiftung Medien')
		.field('id')
		.field('publish')

	item.createView()
		.field('isLogo', 'checkbox')
		.field('image', 'file', {container: 'assets'})


	item.editView()
		.field('publish', 'checkbox')
		.field('isLogo', 'checkbox')
		.field('image', 'file', {container: 'assets'})

		.translationKey('svKunststiftungMediaId')
		.translationField('image', 'file', {container: 'assets'})

}
export default config;
