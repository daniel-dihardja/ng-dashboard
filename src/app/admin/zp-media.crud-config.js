/**
 * Created by danieldihardja on 20/09/16.
 */
function config($crudProvider) {

	var zpMedia = $crudProvider.model('ZpMedia');

	zpMedia.listView()
		.addField('title')
		.addField('publish');

	zpMedia.createView()
		.addField('type', 'select', {values: ['audio', 'video']})
		.addField('title')
		.addField('description', 'text')
		.addField('src', 'file')
		.addField('thumb', 'file');

	zpMedia.editView()
		.addField('publish', 'checkbox')
		.addField('title')
		.addField('description', 'text')
		.addField('src', 'file')
		.addField('thumb', 'file')

		.translationKey('zpMediaId')

		.addTranslationField('title')
		.addTranslationField('description', 'text')
		.addTranslationField('src', 'file')
		.addTranslationField('thumb', 'file')
}
export default config;