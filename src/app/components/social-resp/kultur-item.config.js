/**
 * Created by danieldihardja on 27/09/16.
 */
/**
 * Created by danieldihardja on 27/09/16.
 */

import settings from '../../app.settings';

function config($crudProvider) {

	var kulturItem = $crudProvider.model('SvKulturItem');

	kulturItem.listView()
		.title('Kultur Item')
		.field('dateString')
		.field('publish');

	kulturItem.createView()
		.field('dateString')
		.field('info')
		.field('content', 'text')
		.field('image', 'file', {container: 'assets'})
		.field('video', 'file', {container: 'assets'})
		.field('slug')
		.field('component');


	kulturItem.editView()
		.field('dateString')
		.field('info')
		.field('content', 'text')
		.field('image', 'file', {container: 'assets'})
		.field('video', 'file', {container: 'assets'})
		.field('slug')
		.field('component')

		.translationKey('svKulturItemId')
		.translationField('dateString')
		.translationField('info', 'text')
		.translationField('content', 'text')
		.translationField('image', 'file', {container: 'assets'})
		.translationField('video', 'file', {container: 'assets'})

}
export default config;
