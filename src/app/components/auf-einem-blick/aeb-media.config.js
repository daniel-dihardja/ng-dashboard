/**
 * Created by danieldihardja on 25/09/16.
 */

import settings from '../../app.settings';

function config($cp) {

	var aebMedia = $cp.model('EbMedia');

	aebMedia.listView()
		.title('/ Medien')
		.field('src')
		.field('publish')
		.backButton(true);

	aebMedia.createView()
		.field('title')
		.field('text', 'text')
		.field('longText', 'text')
		.field('src', 'file', {
			container: 'aeb',
			maxWidth: settings.ipadProMaxWidth,
			maxHeight: settings.ipadProMaxHeight
		})
		.field('thumb', 'file', {container: 'aeb'});

	aebMedia.editView()
		.backButton(true)
		.field('publish', 'checkbox')
		.field('title')
		.field('text', 'text')
		.field('longText', 'text')
		.field('src', 'file', {
			container: 'aeb',
			maxWidth: settings.ipadProMaxWidth,
			maxHeight: settings.ipadProMaxHeight
		})
		.field('thumb', 'file', {
			container: 'aeb',
			maxWidth: settings.ipadProMaxWidth,
			maxHeight: settings.ipadProMaxHeight
		})
		.translationKey('ebMediaId')
		.translationField('title')
		.translationField('text', 'text')
		.translationField('longText', 'text')
		.translationField('src', 'file', {
			container: 'aeb',
			maxWidth: settings.ipadProMaxWidth,
			maxHeight: settings.ipadProMaxHeight
		})
		.translationField('thumb', 'file', {
			container: 'aeb',
			maxWidth: settings.ipadProMaxWidth,
			maxHeight: settings.ipadProMaxHeight
		});
}
export default config;