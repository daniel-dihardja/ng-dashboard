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

	var zpArtikelMedia = $crudProvider.model('ZpArtikelMedia');
	zpArtikelMedia.listView()
		.title('/ Medien')
		.field('id')
		.field('publish')
		.backButton(true);

	zpArtikelMedia.createView()
		.field('type', 'select', {values: ['image', 'video']})
		.field('src', 'file', imgConfig)
		.field('thumb', 'file', imgConfig)
		.field('caption');

	zpArtikelMedia.editView()
		.field('publish', 'checkbox')
		.field('type', 'select', {values: ['image', 'video']})
		.field('src', 'file', imgConfig)
		.field('thumb', 'file', imgConfig)
		.field('caption')

		.translationKey('zpArtikelMediaId')
		.translationField('src', 'file', imgConfig)
		.translationField('thumb', 'file', imgConfig)
		.translationField('caption')
}
export default config;