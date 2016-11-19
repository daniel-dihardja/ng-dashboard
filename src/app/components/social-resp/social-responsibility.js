/**
 * Created by danieldihardja on 25/10/16.
 */

import settings from '../../app.settings';

function config($crudProvider) {

	var socialResp = $crudProvider.model('SozialeVerantwortung');

	socialResp.listView()
		.title('Soziale Verantwortung')
		.field('title');

	socialResp.createView()
		.field('title')
		.field('component');


	socialResp.editView()
		.title('Soziale Verantwortung')
		.field('title')
		.field('component', null, {showOnly: 'admin'})

		.translationKey('sozialeVerantwortungId')
		.translationField('title')
		.hasManyLink('SozialeVerantwortungMedia', 'sozialeVerantwortungId', {label: 'Zu den Medien'})
}
export default config;