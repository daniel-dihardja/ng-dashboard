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
		thumbWidth: [784, 1568, 2352],
		thumbHeight: 1364
	};

	var thumbConfig = {
		container: 'aeb',
		maxWidth: settings.ipadProMaxWidth,
		maxHeight: settings.ipadProMaxHeight
	};

	aebContent.listView()
		.title('/ Beiträge')
		.field('title')
		.field('publish')
		.backButton(true);

	aebContent.editView()
		.backButton(true)
		.title('#ENTITY_TITLE#')
		.field('publish', 'checkbox')
		.field('nameId', null, {showOnly: 'admin'})
		.field('title')
		.field('text', 'text')
		.field('src', 'file', imgConfig)
		.field('thumb', 'file', thumbConfig)
		.translationKey('ebContentId')
		.translationField('title')
		.translationField('text', 'text')
		.translationField('src', 'file', imgConfig)
		.translationField('thumb', 'file', thumbConfig)
		.hasManyLink('EbMedia', 'ebContentId', {label: 'Zu den Medien'})
		.hasManyLink('EbContent', 'ebContentId', {label: 'Zu den Unterbeiträgen'});


	aebContent.createView()
		.field('nameId', null, {showOnly: 'admin'})
		.field('title')
		.field('text', 'text')
		.field('src', 'file', imgConfig)
		.field('thumb', 'file', thumbConfig)
}
export default config;