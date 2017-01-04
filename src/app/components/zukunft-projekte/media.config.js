/**
 * Created by danieldihardja on 25/09/16.
 */
import settings from '../../app.settings';

function config($crudProvider) {

	var imgConfig = {
		container: 'assets',
		prefWidth: settings.zpImgMaxWidth,
		prefHeight: settings.zpImgMaxHeight,
		maxWidth: settings.imgMaxWidth,
		maxHeight: settings.imgMaxHeight
	};

	var zpMedia = $crudProvider.model('ZpMedia');

	zpMedia.listView()
		.backButton(true)
		.title('/ Medien')
		.field('title')
		.field('publish')
		.backButton(true);

	zpMedia.createView()
		.backButton(true)
		.config({ignoreThumb: true})
		.field('type', 'select', {values: ['audio', 'video']})
		.field('title')
		.field('description', 'text')
		.field('src', 'file', imgConfig)
		.field('thumb', 'file', imgConfig);

	zpMedia.editView()
		.backButton(true)
		.config({ignoreThumb: true})
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