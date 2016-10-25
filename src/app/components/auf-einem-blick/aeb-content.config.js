/**
 * Created by danieldihardja on 25/09/16.
 */

import settings from '../../app.settings';

function config($cp) {
	var aebContent = $cp.model('EbContent');

	aebContent.listView()
		.title('/ Beiträge')
		.field('title')
		.field('publish')
		.backButton(true);


	aebContent.editView()
		.title('#ENTITY_TITLE#')
		.field('publish', 'checkbox')
		.field('nameId')
		.field('title')
		.field('text', 'text')
		.field('longText', 'text')
		.field('thumb', 'file', {
			container: 'aeb',
			maxWidth: settings.ipadProMaxWidth,
			maxHeight: settings.ipadProMaxHeight
		})
		.translationKey('ebContentId')
		.translationField('title')
		.translationField('text', 'text')
		.translationField('longText', 'text')
		.hasManyLink('EbMedia', 'ebContentId', {label: 'Zu den Medien'})
		.hasManyLink('EbContent', 'ebContentId', {label: 'Zu den Unterbeiträgen'});


	aebContent.createView()
		.field('title')
		.field('text', 'text')
		.field('longText', 'text');
}
export default config;