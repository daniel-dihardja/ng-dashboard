/**
 * Created by danieldihardja on 25/09/16.
 */
import settings from '../../app.settings';

function config($crudProvider) {

	var zpMediaWrapper = $crudProvider.model('ZpMediaWrapper');

	zpMediaWrapper.listView()
		.field('title')
		.field('publish');

	zpMediaWrapper.createView()
		.field('title')
		.field('upperCard', null, {showOnly: 'admin'});

	zpMediaWrapper.editView()
		.field('publish', 'checkbox')
		.field('title')
		.field('upperCard', null, {showOnly: 'admin'})

		.translationKey('zpMediaWrapperId')
		.translationField('title')

		.hasManyLink('ZpMedia', 'zpMediaWrapperId', {label: 'Zu den Medien'})

}
export default config;