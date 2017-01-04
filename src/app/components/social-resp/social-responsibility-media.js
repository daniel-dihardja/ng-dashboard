/**
 * Created by danieldihardja on 25/10/16.
 */
/**
 * Created by danieldihardja on 27/09/16.
 */

import settings from '../../app.settings';

function config($crudProvider) {

	var imgOption = {
		container: 'assets',
		maxWidth: settings.surfaceWidth,
		maxHeight: settings.surfaceHeight,
	};

	var socialResp = $crudProvider.model('SozialeVerantwortungMedia');

	socialResp.listView()
		.backButton(true)
		.title('Soziale Verantwortung')
		.field('image');

	socialResp.createView()
		.backButton(true)
		.field('image', 'file', imgOption)
		.field('component', null, {showOnly: 'admin'});


	socialResp.editView()
		.backButton(true)
		.title('#ENTITY_IMAGE#')
		.field('image', 'file', imgOption)

		.translationKey('sozialeVerantwortungMediaId')
		.translationField('image', 'file', imgOption)
}
export default config;