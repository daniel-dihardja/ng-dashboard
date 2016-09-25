/**
 * Created by danieldihardja on 20/09/16.
 */
function config($crudProvider) {

	var zpMedia = $crudProvider.model('ZpMedia');

	zpMedia.listView()
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
		.field('src', 'file')
		.field('thumb', 'file')

		.translationKey('zpMediaId')

		.translationField('title')
		.translationField('description', 'text')
		.translationField('src', 'file')
		.translationField('thumb', 'file')
}
export default config;