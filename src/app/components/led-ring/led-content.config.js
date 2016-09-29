/**
 * Created by danieldihardja on 29/09/16.
 */
function config($crudProvider) {

	var ledContet = $crudProvider.model('LedContent');

	ledContet.listView()
		.title('/ Beiträge')
		.field('title')
		.field('publish');

	ledContet.createView()
		.field('title')
		.field('txt1')
		.field('txt2')
		.field('txt3')
		.field('txt4')
		.field('txt5')

	ledContet.editView()
		.field('publish', 'checkbox')
		.field('title')
		.field('txt1')
		.field('txt2')
		.field('txt3')
		.field('txt4')
		.field('txt5')
		.translationKey('ledContentId')
		.translationField('title')
		.translationField('txt1')
		.translationField('txt2')
		.translationField('txt3')
		.translationField('txt4')
		.translationField('txt5')
}
export default config;