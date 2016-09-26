/**
 * Created by danieldihardja on 25/09/16.
 */
import settings from '../../app.settings';

function config($crudProvider) {

	var zpMedia = $crudProvider.model('ZpMedia');

	zpMedia.listView()
		.title('Filmvertiefung Medien')
		.field('title')
		.field('publish');

	zpMedia.createView()
		.field('type', 'select', {values: ['audio', 'video']})
		.field('title')
		.field('description', 'text')
		.field('src', 'file')
		.field('thumb', 'file');

	zpMedia.editView()
		.field('publish', 'checkbox')
		.field('title')
		.field('description', 'text')
		.field('src', 'file', {
			container: 'assets',
			maxWidth: settings.ipadProMaxWidth,
			maxHeight: settings.ipadProMaxHeight,
			maxSize: settings.maxImageMBSize * 1024 * 1024
		})
		.field('thumb', 'file', {container: 'assets'})
		.translationKey('zpMediaId')
		.translationField('title')
		.translationField('description', 'text')
		.translationField('src', 'file', {
			container: 'assets',
			maxWidth: settings.ipadProMaxWidth,
			maxHeight: settings.ipadProMaxHeight,
			maxSize: settings.maxImageMBSize * 1024 * 1024
		})
		.translationField('thumb', 'file', {container: 'assets'})

}
export default config;