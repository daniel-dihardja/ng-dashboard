/**
 * Created by danieldihardja on 25/09/16.
 */

import settings from '../../app.settings';

function config($cp) {

	var aebCat = $cp.model('EbCategory');

	aebCat.listView()
		.field('title')
		.field('publish');

	aebCat.editView()
		.field('publish', 'checkbox')
		.field('title')
		.field('text', 'text')
		.field('longText', 'text')
		.field('thumb', 'file', {
			container: 'aeb',
			maxWidth: settings.ipadProMaxWidth,
			maxHeight: settings.ipadProMaxHeight
		})
		.translationKey('ebCategoryId')
		.translationField('title')
		.translationField('text', 'text')
		.translationField('longText', 'text')
		.translationField('thumb', 'file', {
			container: 'aeb',
			maxWidth: settings.ipadProMaxWidth,
			maxHeight: settings.ipadProMaxHeight
		})
		.hasManyLink('EbContent', 'ebCategoryId', {label: 'Zu den Beiträgen'})
		.hasManyLink('EbMedia', 'ebCategoryId', {label: 'Zu den Medien'});


	aebCat.createView()
		.field('title')
		.field('text', 'text')
		.field('longText', 'text')
		.field('thumb', 'file', {
			container: 'aeb',
			maxWidth: settings.ipadProMaxWidth,
			maxHeight: settings.ipadProMaxHeight
		})
}
export default config;