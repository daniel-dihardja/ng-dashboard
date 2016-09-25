/**
 * Created by danieldihardja on 25/09/16.
 */
function config($crudProvider) {

	var zpArtikelMedia = $crudProvider.model('ZpArtikelMedia');
	zpArtikelMedia.listView()
		.field('id')
		.field('publish')
		.backButton(true)

	zpArtikelMedia.createView()
		.field('type', 'select', {values: ['image', 'video']})
		.field('src', 'file')
		.field('thumb', 'file');

	zpArtikelMedia.editView()
		.field('publish', 'checkbox')
		.field('type', 'select', {values: ['image', 'video']})
		.field('src', 'file')
		.field('thumb', 'file')

		.translationKey('zpArtikelMediaId')

		.translationField('src')
		.translationField('thumb')
}