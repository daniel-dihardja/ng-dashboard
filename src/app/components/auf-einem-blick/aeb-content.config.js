/**
 * Created by danieldihardja on 25/09/16.
 */

import settings from '../../app.settings';

function config($cp) {

	var aebContent = $cp.model('EbContent');

	var imgConfig = {
		container: 'aeb',
		maxWidth: settings.ipadProMaxWidth,
		maxHeight: settings.ipadProMaxHeight,
		prefWidth: [784, 1568, 2352],
		prefHeight: 1364
	};

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
		.field('src', 'file', imgConfig)
		.field('thumb', 'file', imgConfig)
		.translationKey('ebContentId')
		.translationField('title')
		.translationField('text', 'text')
		.translationField('longText', 'text')
		.translationField('src', 'file', imgConfig)
		.translationField('thumb', 'file', imgConfig)
		.hasManyLink('EbMedia', 'ebContentId', {label: 'Zu den Medien'})
		.hasManyLink('EbContent', 'ebContentId', {label: 'Zu den Unterbeiträgen'});


	aebContent.createView()
		.field('title')
		.field('text', 'text')
		.field('longText', 'text');
}
export default config;