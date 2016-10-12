/**
 * Created by danieldihardja on 25/09/16.
 */
import settings from '../../app.settings';

function config($crudProvider) {

	var imgConfig = {
		container: 'assets',
		prefWidth: settings.zpImgMaxWidth,
		prefHeight: settings.zpImgMaxWidth,
		maxWidth: settings.imgMaxWidth,
		maxHeight: settings.imgMaxHeight
	};

	var zpMedia = $crudProvider.model('ZpMedia');

	zpMedia.listView()
		.title('/ Medien')
		.field('title')
		.field('publish')
		.backButton(true)

	zpMedia.createView()
		.field('type', 'select', {values: ['audio', 'video']})
		.field('title')
		.field('description', 'text')
		.field('src', 'file')
		.field('thumb', 'file');

	zpMedia.editView()
		.field('publish', 'checkbox')
		.field('type', 'select', {values: ['audio', 'video']})
		.field('title')
		.field('description', 'text')
		.field('src', 'file', imgConfig)
		.field('thumb', 'file', imgConfig)

		.translationKey('zpMediaId')
		.translationField('title')
		.translationField('description', 'text')
		.translationField('src', 'file', imgConfig)
		.translationField('thumb', 'file', imgConfig)
}
export default config;