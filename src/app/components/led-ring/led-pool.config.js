/**
 * Created by danieldihardja on 27/09/16.
 */

import settings from '../../app.settings';

function config($crudProvider) {

	var ledPool = $crudProvider.model('LedPool');

	ledPool.listView()
		.title('Pools')
		.field('title')
		.field('publish');

	ledPool.createView()
		.field('title');

	ledPool.editView()
		.title('#ENTITY_TITLE#')
		.field('publish', 'checkbox')
		.field('title')
		.translationKey('ledPoolId')
		.translationField('title')
		.hasManyLink('LedContent', 'ledPoolId', {label: 'Zu den Beiträge'})
}
export default config;

